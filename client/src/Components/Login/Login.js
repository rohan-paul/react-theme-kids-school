import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import CheckBox from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import green from "@material-ui/core/colors/green";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Image from "./school-2.jpg";
import ForgotPasswordEmail from "./ForgotPasswordEmail";
import PasswordField from "material-ui-password-field";
import validate from "./UtilFunctions/validateEmail";

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {},
  card: {
    height: "600px",
    maxWidth: "600px",
    maxHeight: "1200px"
  },
  media: {
    height: 100,
    width: 100,
    margin: "0px auto 0px auto"
  },
  title: {
    width: 85,
    margin: "0 auto 0px auto",
    padding: "0px",
    fontSize: "35px",
    color: "white"
  },
  checkBoxSizeIcon: {
    width: 35,
    height: 35
  },
  loginPaper: {
    height: "700px",
    width: "500px",
    margin: "50px auto"
  },
  paperFooter: {
    height: "25px",
    margin: "22px 0 0 141px",
    width: "100%",
    fontWeight: "bold"
  },
  label: {
    fontSize: "20px"
  }
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      rememberMeChecked: false,
      email: "",
      password: "",
      message: "",
      shouldForgotPasswordComponentOpen: false,
      redirectToReferrer: false
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  Login = () => {
    const { email, password, rememberMeChecked } = this.state;

    axios
      .post("/api/auth/login", { email, password, rememberMeChecked })
      .then(result => {
        localStorage.setItem("user", JSON.stringify(result.data));

        this.setState(() => ({
          message: "",
          redirectToReferrer: true,
          redirectTo: result.data.userType
        }));
      })
      .catch(error => {
        if (error.response.status === 404) {
          this.setState({ message: "Authentication failed. User not found." });
        } else if (error.response.status === 401) {
          this.setState({ message: "Authentication failed. Wrong Password" });
        } else if (error.response.status === 403) {
          this.setState({
            message: "Authentication failed. Access only authorized personnel"
          });
        } else if (
          error.response.status === 500 ||
          error.response.status === 422
        ) {
          this.setState({
            message: "Ooops some error happened, please try again"
          });
        }
      });
  };

  // This function will set the value of the state rememberMeChecked
  handleCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  closeForgotPasswordEmailComp = () => {
    this.setState({
      shouldForgotPasswordComponentOpen: false
    });
  };

  handleEnterKeyPress = e => {
    if (e.key === "Enter") {
      this.Login();
    }
  };

  render() {
    const {
      email,
      password,
      message,
      redirectTo,
      redirectToReferrer,
      shouldForgotPasswordComponentOpen
    } = this.state;

    const { classes } = this.props;

    if (redirectToReferrer) {
      if (redirectTo === "school-operator") {
        return <Redirect to={"/dashboard/imports"} />;
      } else {
        return <Redirect to={"/dashboard/onBoardPort"} />;
      }
    }

    return (
      <div>
        <Grid
          container
          spacing={32}
          direction="column"
          alignItems="center"
          justify="center"
          style={{
            minHeight: "100vh",
            backgroundImage: `url(${Image})`,
            height: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "norepeat",
            backgroundSize: "cover",
            overflow: "hidden",
            position: "relative",
            margin: 0
          }}
        >
          {message !== "" && (
            <div className="alert alert-warning alert-dismissible" role="alert">
              {message}
            </div>
          )}
          <Paper className={classes.loginPaper}>
            <Card className={classes.card}>
              <div
                style={{
                  backgroundColor: "rgb(0,188,212)",
                  padding: "20px"
                }}
              >
                <CardMedia
                  className={classes.media}
                  image={require("./school.jpg")}
                  style={styles.media}
                />

                <CardHeader
                  disableTypography={true}
                  className={classes.title}
                  title="Login"
                />
              </div>
              <CardContent>
                <ValidatorForm
                  ref="form"
                  onSubmit={this.Login}
                  onError={errors => console.log(errors)}
                >
                  <TextValidator
                    placeholder="Please enter Email"
                    margin="normal"
                    value={email}
                    onChange={e =>
                      this.setState({
                        email: e.target.value
                      })
                    }
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required",
                      "email is not valid"
                    ]}
                    style={{
                      width: "100%",
                      paddingTop: "20px"
                    }}
                  />
                  <PasswordField
                    id="standard-password-input"
                    type="password"
                    label="Password"
                    placeholder="Please enter Password"
                    margin="none"
                    value={password}
                    onChange={e =>
                      this.setState({
                        password: e.target.value
                      })
                    }
                    helpertext={password === "" ? "Please enter Password" : " "}
                    style={{
                      width: "100%",
                      paddingTop: "35px"
                    }}
                    onKeyPress={this.handleEnterKeyPress}
                  />
                </ValidatorForm>
                <FormControlLabel
                  style={{ marginTop: "55px" }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlank
                          className={classes.checkBoxSizeIcon}
                        />
                      }
                      checked={this.state.rememberMeChecked}
                      checkedIcon={
                        <CheckBox className={classes.checkBoxSizeIcon} />
                      }
                      onChange={this.handleCheckboxChange("rememberMeChecked")}
                      value="rememberMeChecked"
                      classes={{
                        checked: classes.checked
                      }}
                    />
                  }
                  label={
                    <Typography style={styles.label}>Remember Me</Typography>
                  }
                />

                <Link
                  component="button"
                  onClick={() => {
                    this.setState({
                      shouldForgotPasswordComponentOpen: true
                    });
                  }}
                  style={{
                    marginLeft: "85px",
                    marginTop: "55px",
                    fontWeight: "bold",
                    paddingBottom: "5px"
                  }}
                >
                  FORGOT PASSWORD
                  {this.state.shouldForgotPasswordComponentOpen ? (
                    <ForgotPasswordEmail
                      shouldForgotPasswordComponentOpen={
                        shouldForgotPasswordComponentOpen
                      }
                      closeForgotPasswordEmailComp={
                        this.closeForgotPasswordEmailComp
                      }
                    />
                  ) : null}
                </Link>
                <div>
                  <Button
                    onClick={this.Login}
                    variant="outlined"
                    size="large"
                    color="primary"
                    style={{
                      height: "49px",
                      marginTop: "25px",
                      width: "100%"
                    }}
                    type="submit"
                    disabled={
                      email === "" ||
                      validate(this.state.email) ||
                      password === ""
                    }
                  >
                    LOG IN
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div style={{ margin: "15px 0 0 147px" }}>
              {"Developed and Maintained by"}
            </div>

            <a
              href="https://www.volteo.com/"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.paperFooter}
            >
              Some Awesome Dev Company
            </a>
          </Paper>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);

/*
1> To test loggin in with Postman fire a POST request in http://localhost:3000/api/auth/login

{
"email": "abc@live.in",
"password":"abc"
}

2> When the Login request is successful, my then() callback (inside Login.js function ) will receive a response object with the following properties:

data: the payload returned from the server. By default, Axios expects JSON and will parse this back into a JavaScript object for me.

status: the HTTP code returned from the server.

statusText: the HTTP status message returned by the server.

headers: all the headers sent back by the server. In this app, I will later use getToken(req.headers) to get the actual token saved in localStorage of the browser.

config: the original request configuration.

request: the actual XMLHttpRequest object (when running in a browser).

3> Login lates (25Mar2019) -
rohanpaul2@gmail.com
abcde

*/
