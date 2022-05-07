import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';

import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { signupUser, validateEmail } from '../../resources/helpers/authHelper';

import BaseSnackbar from '../../components/BaseSnackbar';

export default function Register() {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    username: '',
    showPassword: false,
    showConfirmPassword: false
  });
  const [error, setError] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    username: '',
    lastName: ''
  });

  const [backendError, setBackendError] = React.useState('');

  const handleChange = (event, prop) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const loginUserHandler = async () => {
    let emailError =
      values.email === '' || !validateEmail(values.email)
        ? 'Please provide a valid email'
        : '';

    let passwordError =
      values.password === '' ? 'Please provide a password' : '';

    let firstNameError =
      values.firstName === '' ? 'Please enter your name' : '';

    let lastNameError =
      values.lastName === '' ? 'Please enter your surname' : '';

    let usernameError = values.username === '' ? 'Please enter a username' : '';

    let confirmPasswordError =
      values.password !== values.confirmPassword ||
      values.confirmPassword === ''
        ? "Passwords don't match"
        : '';

    if (
      emailError === '' &&
      passwordError === '' &&
      firstNameError === '' &&
      lastNameError === '' &&
      usernameError === '' &&
      confirmPasswordError === ''
    ) {
      setBackendError('');
      try {
        const response = await signupUser(values);
        console.log(response);
        if (response.statusCode) {
          setBackendError(response.message);
          setError({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            username: '',
            confirmPassword: ''
          });
        } else {
          navigate('/login');
        }
      } catch (err) {
        console.log(err);
      }
    } else
      setError({
        email: emailError,
        password: passwordError,
        firstName: firstNameError,
        lastName: lastNameError,
        confirmPassword: confirmPasswordError,
        username: usernameError
      });
  };

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography
          color="#696969"
          mb="10px"
          mt="50px"
          variant="h4"
          fontFamily="sans-serif"
        >
          Hello !
        </Typography>
        <Typography
          color="#696969"
          mb="50px"
          variant="h5"
          fontFamily="sans-serif"
          sx={{
            textAlign: 'center'
          }}
        >
          Create a new account
        </Typography>
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <TextField
            id="outlined-email"
            type="email"
            value={values.email}
            onChange={(event) => {
              handleChange(event, 'email');
            }}
            error={error.email === '' ? false : true}
            label="Email"
          />
          <Typography
            sx={{
              color: 'red'
            }}
          >
            {error.email}
          </Typography>
        </FormControl>

        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <TextField
            id="outlined-name"
            type="text"
            value={values.firstName}
            onChange={(event) => {
              handleChange(event, 'firstName');
            }}
            error={error.firstName === '' ? false : true}
            label="First Name"
          />
          <Typography
            sx={{
              color: 'red'
            }}
          >
            {error.firstName}
          </Typography>
        </FormControl>

        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <TextField
            id="outlined-surname"
            type="text"
            value={values.lastName}
            onChange={(event) => {
              handleChange(event, 'lastName');
            }}
            error={error.lastName === '' ? false : true}
            label="Last Name"
          />
          <Typography
            sx={{
              color: 'red'
            }}
          >
            {error.lastName}
          </Typography>
        </FormControl>

        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <TextField
            id="outlined-username"
            type="text"
            value={values.username}
            onChange={(event) => {
              handleChange(event, 'username');
            }}
            error={error.username === '' ? false : true}
            label="Username"
          />
          <Typography
            sx={{
              color: 'red'
            }}
          >
            {error.username}
          </Typography>
        </FormControl>

        <FormControl sx={{ mt: 1, width: '100%' }} variant="outlined">
          <TextField
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={(event) => handleChange(event, 'password')}
            error={error.password === '' ? false : true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <Typography
            sx={{
              color: 'red'
            }}
          >
            {error.password}
          </Typography>
        </FormControl>

        <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
          <TextField
            id="outlined-adornment-confirm-password"
            type={values.showConfirmPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            onChange={(event) => handleChange(event, 'confirmPassword')}
            error={error.confirmPassword === '' ? false : true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
          <Typography
            sx={{
              color: 'red'
            }}
          >
            {error.confirmPassword}
          </Typography>
        </FormControl>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 3, display: 'flex', width: '100%' }}
          onClick={loginUserHandler}
        >
          sign in
        </Button>
        <Box sx={{ width: '100%' }}>
          <Divider variant="fullWidth" sx={{ mt: 3, mb: 3 }} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography
            color="#696969"
            fontFamily="sans-serif"
            sx={{
              textAlign: 'center'
            }}
          >
            Already have an account ?
          </Typography>
          <Button
            variant="outlined"
            component={Link}
            to="/login"
            sx={{ ml: 2 }}
            color="secondary"
          >
            LogIn
          </Button>
        </Box>
      </Container>

      {!!backendError && <BaseSnackbar text={backendError} />}
    </>
  );
}
