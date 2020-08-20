var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

// load up the user model
var User = require("../models/user");
var settings = require("./settings"); // get settings file

/* Configuration for getting the user by matching the JWT token with the token I got from the client.
https://github.com/themikenicholson/passport-jwt#extracting-the-jwt-from-the-request
https://github.com/themikenicholson/passport-jwt#usage */

module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;
  passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
      //   console.log("payload received", jwt_payload);
      // Now the usual database call
      User.findOne({ _id: jwt_payload.id }, function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    })
  );
};

/*1. jsonwebtoken library is responsible for generating an encoded token (with jwt.sign() function) with a payload, given to the user that sends the right e-mail and password via req.body.email and req.body.password in the request. The payload is going to have only the user.username, user._id and user.employerType

2. The middleware will be executed at the moment it starts the application, and it basically receives in its callback a payload that contains a decoded JSON which was decoded using the secret key settings.secret. This payload will have the attribute 'id' that will be a user's _id in the database, to be used as argument to search a user in the database

3. Here, I am assuming (when authenticating) that the client will send the JWT token in Authorization Header as a "jwt" schema. Thats why I am doing
< ExtractJwt.fromAuthHeaderWithScheme("jwt") >

Later, in the routes files (controllers) for each of the protected routes, I will check with < passport.authenticate("jwt", { session: false }) > middleware. So, the user must now have a JWT token in every header in order to make requests to that protected route.

 I pass {session: false} so that it wont save the user in the session

 3> Each time I pass that < passport.authenticate("jwt", { session: false }) > middleware to any route in my index.js file at the root, it will add a 'user' object with each of my request. So, I can access that  by 'req.use' and get all the data associated with that user.

3. https://github.com/themikenicholson/passport-jwt#included-extractors -

fromAuthHeaderWithScheme(auth_scheme) creates a new extractor that looks for the JWT in the authorization header, expecting the scheme to match auth_scheme (here which will be 'jwt')

4. After using any protected route (for example adding a new tidal data under /tidal/create) route (which had `passport.authenticate` as the middleware) I will get the following printed in Terminal (which are actual user's email, the saved mongo _id and employer type)

```
payload received { username: 'actual_user-email@gmail.com',
   id: '664633411681589161646',
   employerType: 'port',
   iat: 1544424322,
   exp: 1544438722 }
````
*/
