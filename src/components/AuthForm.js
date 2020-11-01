import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signup } from '../store/actions/authentication';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  switchLink: {
    color: theme.palette.info
  }
}));

const AuthForm = (props) => {
  const classes = useStyles();
  const [ open, setOpen ] = useState(false);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('demo@example.com');
  const [ password, setPassword ] = useState('password');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ errors, setErrors ] = useState([]);
  const [ loginView, setLoginView ] = useState(true);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    let errors = await dispatch(login(email, password));
    if (!errors) {
      handleClose();
    } else {
      setErrors(errors);
    }
  };

  const handleSignUp = async () => {
    let user = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    }
    let errors = await dispatch(signup(user));
    if (!errors) {
      handleClose();
    } else {
      setErrors(errors);
    }
  }

  const updateFirstName = e => {
    setFirstName(e.target.value);
  }

  const updateLastName = e => {
    setLastName(e.target.value);
  }

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const updateConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const switchForm = () => {
    if (loginView) {
      setEmail('');
      setPassword('');
    } else {
      setEmail('demo@example.com');
      setPassword('password');
    }
    setLoginView(!loginView);
  };

  return (
    <>
      <Button
        color='primary'
        onClick={handleClickOpen}>
        Sign In
      </Button>
      {loginView ?
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='Log In/Sign Up'>
          <DialogTitle
            id='LoginTitle'>
            Log In
          </DialogTitle>
          <DialogContent>
            <DialogContentText color="error">
              {errors.map(err => {
                return <div>{err}</div>;
              })}
            </DialogContentText>
            <TextField
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={updateEmail}
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              value={password}
              onChange={updatePassword}
              type="password"
              fullWidth
            />
            <DialogContentText>
              Don't have an account?
              <span
                className={classes.switchLink}
                onClick={switchForm}>
                &nbsp; Sign Up
              </span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              id="cancel-button"
              color="primary"
              onClick={handleClose}
              width="75%">
              Cancel
            </Button>
            <Button
              id="login-button"
              color="primary"
              onClick={handleLogin}
              width="75%">
              Log In
            </Button>
          </DialogActions>
        </Dialog> :
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='Log In/Sign Up'>
          <DialogTitle
            id='AuthTitle'>
            SignUp
        </DialogTitle>
          <DialogContent>
            <DialogContentText color="error">
              {errors.map((err, i) => {
                return <div>{err}</div>;
              })}
            </DialogContentText>
            <TextField
              id="firstName"
              type="text"
              label="First Name"
              onChange={updateFirstName}
              fullWidth
            />
            <TextField
              id="lastName"
              type="text"
              label="Last Name"
              onChange={updateLastName}
              fullWidth
            />
            <TextField
              id="email"
              type="email"
              label="Email"
              onChange={updateEmail}
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              onChange={updatePassword}
              type="password"
              fullWidth
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              onChange={updateConfirmPassword}
              type="password"
              fullWidth
            />
            <DialogContentText>
              Already have an account?
          <span
                className={classes.switchLink}
                onClick={switchForm}>
                &nbsp; Log In
          </span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              id="cancel-button"
              color="primary"
              onClick={handleClose}
              width="75%">
              Cancel
          </Button>
            <Button
              id="login-button"
              color="primary"
              onClick={handleSignUp}
              width="75%">
              Log In
          </Button>
          </DialogActions>
        </Dialog>}
    </>
  );
};

export default AuthForm;