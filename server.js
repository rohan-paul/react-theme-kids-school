require("dotenv").config();
const fs = require("fs");

const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const auth = require("./routes/auth");

const passport = require("passport");
require("./config/passport")(passport);

const config = require("./config/config");

const addRequestId = require("express-request-id")();

config.connectDB();

// Generate UUID for request and add it to X-Request-Id header. To work along with morgan logging. Adding a request id to the request object, to facilitate tying different log entries to each other. So a Request log and its associated Response log would have the same id.
app.use(addRequestId);
//app.use(morgan()); // I am both writing to a log file while showing logs on the console.
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

morgan.token("id", function getId(req) {
  return req.id;
});

// From - https://facebook.github.io/create-react-app/docs/deployment
app.use(express.static(path.join(__dirname, "/client/build")));

// Morgan - For saving logs to a log file
let accessLogStream = fs.createWriteStream(__dirname + "/access.log", {
  flags: "a"
});

// my custom log format, just adding ":id" to the pre-defined "combined" format from morgan
// let loggerFormat =
//   ':id :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :req[header] :response-time ms';

let loggerFormat = `:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]`;

app.use(morgan(loggerFormat, { stream: accessLogStream }));

// Below two functions are for showing logs on the console. Define streams for Morgan. This logs to stderr for status codes greater than 400 and stdout for status codes less than 400.
app.use(
  morgan(loggerFormat, {
    skip: function(req, res) {
      return res.statusCode < 400;
    },
    stream: process.stderr
  })
);

app.use(
  morgan(loggerFormat, {
    skip: function(req, res) {
      return res.statusCode >= 400;
    },
    stream: process.stdout
  })
);

// make the '/api/auth' browser url route to go to auth.js route file
app.use("/api/auth", auth);

// Only now, AFTER the above /api/ routes, the "catchall" handler routes: for any request that doesn't match any route after "/" below and send back React's index.html file.
// Note, this 'catchall" route MUST be put after the above two /api/ routes. Otherwise those api routes will never be hit
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.use((err, req, res, next) => {
  console.log("Error from index.js" + err);
  res.status(422).send({ error: err._message });
});

app.listen(8080, () => {
  console.log("Express Server running on port 8080");
});

// Graceful shutdown, on sigint ( generated with <Ctrl>+C in the terminal ) - kill/close database connection and exit
process.on("SIGINT", () => {
  config.disconnectDB();
  process.exit(0);
});

// "start": "node ./bin/www"
