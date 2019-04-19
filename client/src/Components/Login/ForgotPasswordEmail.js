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

  closeNewItemConfirmSnackbar = () => {
    this.setState({ openNewItemAddedConfirmSnackbar: false });
  };

  closeEmptyFieldSnackbar = () => {
    this.setState({ openEmptyTextFieldSnackbar: false });
  };

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
