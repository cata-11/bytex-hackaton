import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { makeStyles } from '@mui/styles';
import FriendChip from './FriendChip';

import Map from './Map';
const axios = require('axios');

const useStyles = makeStyles({
  inputContainer: {
    // backgroundColor: "rgb(51 51 51)",
    width: '100%',
    height: '55px',
    marginBottom: '30px',
  },
  inputField: { width: '100%', height: '55px' },
  forgotSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberMe: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  linkButton: {
    '&.MuiButtonBase-root:hover': {
      bgcolor: 'transparent',
    },
  },
  signInButton: {
    margin: '25px 0px !important',
    textTransform: 'none !important',
    width: '40%',
  },
  signUpContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '25px',
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 2,
  p: 4,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CreateEvent = ({ open, handleClose }) => {
  const [input, setInput] = React.useState({ email: '', password: '' });
  const [error, setError] = React.useState({ email: '', password: '' });
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [value, setValue] = React.useState(new Date());
  const [coordinates, setCoordinates] = React.useState({
    lat: 0,
    lng: 0,
  });
  const [friends, setFriends] = React.useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get('http://localhost:5000/friends/' + localStorage.getItem('userId'))
        .then((res) => {
          setFriends(res.data.users);
          console.log(res.data.users);
        });
    })();
  }, []);

  const onCoordinatesChange = (coordinates) => {
    console.log(coordinates);
    setCoordinates(coordinates);
  };

  const handleChange = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const handleSignIn = async () => {
    const emailError = input.email === '' ? 'This field cannot be empty' : '';

    const passwordError =
      input.password.length < 8 ? 'You have to invite at least one friend' : '';

    if (emailError === '' && passwordError === '') {
      console.log('success');
    } else setError({ email: emailError, password: passwordError });

    if (coordinates.lat === 0 || coordinates.lng === 0) {
      setError({ ...error, coordinates: 'Please select a location' });
    }

    await axios
      .post('http://localhost:5000/events', {
        name: input.email,
        latitude: coordinates.lat,
        longitude: coordinates.lng,
        date: value,
      })
      .then(async (res) => {
        console.log(res.data);
        const prom_all = [];

        for (let i = 0; i < friends.length; i++) {
          for (let j = 0; j < personName.length; j++) {
            if (
              friends[i].firstname + ' ' + friends[i].lastname ===
              personName[j]
            ) {
              prom_all.push(
                axios.post('http://localhost:5000/notif', {
                  id_from: localStorage.getItem('userId'),
                  id_to: friends[i].id,
                  event_id: res.data.event.id,
                })
              );
            }
          }
        }

        await Promise.all(prom_all);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();

  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleChipDelete = (person) => {
    setPersonName(personName.filter((item) => item !== person));
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create new event
        </Typography>

        <Paper className={classes.inputContainer}>
          <TextField
            error={error.email === '' ? false : true}
            required
            label="Event Name"
            defaultValue="email@someone.com"
            helperText={error.email}
            onChange={(ev) => handleChange(ev, 'email')}
            value={input.email}
            className={classes.inputField}
            variant="filled"
            InputLabelProps={{
              sx: {
                color: '#8c8c8c',
              },
            }}
          />
        </Paper>

        <FormControl sx={{ width: '100%', height: 'fit-content' }}>
          <InputLabel>Name</InputLabel>
          <Paper
            sx={{
              width: '100%',
              height: '55px',
            }}
          >
            <Select
              variant="filled"
              multiple
              value={personName}
              onChange={handleSelect}
              input={
                <OutlinedInput label="Name" className={classes.inputField} />
              }
              MenuProps={MenuProps}
            >
              {friends.map((friend) => (
                <MenuItem
                  key={friend.id}
                  value={friend.firstname + ' ' + friend.lastname}
                  // style={getStyles(name, personName, theme)}
                >
                  {friend.firstname + ' ' + friend.lastname}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </FormControl>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginBottom: '30px',
            marginTop: '10px',
            flexWrap: 'wrap',
          }}
        >
          {personName.map((friend, index) => (
            <FriendChip
              username={friend}
              key={`${friend}-${index}`}
              handleDelete={handleChipDelete}
            />
          ))}
        </Box>

        <Paper className={classes.inputContainer}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => (
                <TextField className={classes.inputField} {...props} />
              )}
              label="DateTimePicker"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
        </Paper>

        <Map onCoordinatesChange={onCoordinatesChange} />

        <Box
          sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}
        >
          <Button
            variant="contained"
            className={classes.signInButton}
            onClick={handleSignIn}
          >
            Done
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateEvent;
