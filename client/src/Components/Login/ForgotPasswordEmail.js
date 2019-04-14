import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { styles } from "./Snackbars/ForgotPasswordStyles";
import validate from "./UtilFunctions/validateEmail";

// This ForgotPasswordEmail is NOT done with Redux (just like Login.js, its completely done with plain React instead of getting the states from Reducers)
class ForgotPasswordEmail extends Component {
  state = {
    open: this.props.shouldForgotPasswordComponentOpen,
    email: "",
    document: {},
    openNewItemAddedConfirmSnackbar: false,
    sendEmailConfirmationMessage:
      "A password reset email has been sent to your registered email",
    emailEnteredNotRegisteredInSystem:
      "The Email you entered is not registered with our system",
    intervalId: ""
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  intervalID = 0;

  closeNewItemConfirmSnackbar = () => {
    this.setState({ openNewItemAddedConfirmSnackbar: false });
  };

  closeEmptyFieldSnackbar = () => {
    this.setState({ openEmptyTextFieldSnackbar: false });
  };

  // this function will both close the modal on clicking the "View or Download" button and also post Visitor data to backend API and update mongodb record for that document model
  sendForgotPasswordLink = () => {
    const { email } = this.state;
    if (email !== "") {
      axios
        .post("/api/forgot-password", {
          email
        })
        .then(() => {
          this.setState({
            open: false,
            openNewItemAddedConfirmSnackbar: true,
            resetPasswordConfirmation: "",
            emailEnteredNotRegisteredInSystem: "",
            vertical: "top",
            horizontal: "center"
          });
        })
        .catch(error => {
          if (error.response.status === 404) {
            this.setState(
              {
                open: false,
                openNewItemAddedConfirmSnackbar: true,
                sendEmailConfirmationMessage: "",
                vertical: "top",
                horizontal: "center"
              },
              () => {
                this.intervalID = setTimeout(() => {
                  this.props.closeForgotPasswordEmailComp();
                }, 2000);
              }
            );
          } else {
            alert("Oops something wrong happened, please try again");
          }
        });
    } else {
      this.setState({ openEmptyTextFieldSnackbar: true });
    }
  };

  /* But when we do setTimeout or setInterval in our React components, it is not dependent on or linked with our React class like normally expected (i.e. will NOT stop automatically when component unmounts ). It will keep on running after its specified condition unless or until I cancel it’s subscription. */
  componentWillUnmount() {
    clearTimeout(this.intervalId);
  }

  handleCancel = () => {
    this.setState({ open: false }, () => {
      this.props.closeForgotPasswordEmailComp();
    });
  };

  handleEnterEscapeKeyPress = e => {
    if (e.key === "Enter") {
      this.sendForgotPasswordLink();
    } else if (e.key === "Escape") {
      this.handleCancel();
    }
  };

  render() {
    const { email } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth={"sm"}
          variant="contained"
          PaperProps={{
            classes: {
              root: classes.paper
            }
          }}
          onKeyDown={this.handleEnterEscapeKeyPress}
        >
          <DialogTitle id="form-dialog-title">Required Information</DialogTitle>
          <DialogContent required>
            <DialogContentText>
              Please enter email to get the password link
            </DialogContentText>
            <ValidatorForm
              ref="form"
              className={classes.container}
              onError={errors => console.log(errors)}
            >
              <TextValidator
                id="outlined-bare"
                required
                autoFocus
                margin="dense"
                value={email}
                onChange={e =>
                  this.setState({
                    email: e.target.value
                  })
                }
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
                label="Email"
                type="email"
                fullWidth
              />
            </ValidatorForm>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleCancel}
              color="secondary"
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              onClick={this.sendForgotPasswordLink}
              color="primary"
              variant="contained"
              disabled={email === "" || validate(this.state.email)}
            >
              Send Password Reset Link
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// export default ForgotPasswordEmail;
export default withStyles(styles, { withTheme: true })(ForgotPasswordEmail);
