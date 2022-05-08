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

import { loginUser, validateEmail } from '../../resources/helpers/authHelper';

import BaseSnackbar from '../../components/BaseSnackbar';

import { useContext } from 'react';
import UserContext from '../../resources/context/UserContext';

export default function Login() {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false
  });
  const [error, setError] = React.useState({ email: '', password: '' });

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

  const userCtx = useContext(UserContext);

  const setStorage = (payload) => {
    localStorage.setItem('token', payload.token);
    localStorage.setItem('email', payload.email);
    localStorage.setItem('firstName', payload.firstname);
    localStorage.setItem('lastName', payload.lastname);
    localStorage.setItem('username', payload.username);
    localStorage.setItem('userId', payload.id);
    localStorage.setItem('score', payload.score);
  };

  const authUser = () => userCtx.authenticateUser();

  const loginUserHandler = async () => {
    let emailError =
      values.email === '' || !validateEmail(values.email)
        ? 'Please provide a valid email'
        : '';

    let passwordError =
      values.password === '' ? 'Please provide a password' : '';

    if (emailError === '' && passwordError === '') {
      setBackendError('');
      try {
        const response = await loginUser(values);
        if (response.statusCode) {
          setBackendError(response.message);
          setError({ email: '', password: '' });
        } else {
          setStorage(response);
          authUser();
          navigate('/home');
        }
      } catch (err) {
        console.log(err);
      }
    } else setError({ email: emailError, password: passwordError });
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
          Hello Again !
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
          Welcome back you've been missed !
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
            New here ?
          </Typography>
          <Button
            variant="outlined"
            component={Link}
            to="/signup"
            sx={{ ml: 2 }}
            color="secondary"
          >
            SignUp
          </Button>
        </Box>
      </Container>

      {!!backendError && <BaseSnackbar text={backendError} />}
    </>
  );
}
