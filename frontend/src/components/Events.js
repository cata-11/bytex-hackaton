import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
const axios = require('axios');

export default function Events() {
  const [events, setEvents] = useState([]);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      await axios.get('http://localhost:5000/events').then((res) => {
        setEvents(res.data.events);
        console.log(res.data);
      });
    })();
  }, []);

  const CheckLocation = async () => {
    await axios
      .put('http://localhost:5000/points', {
        id: localStorage.getItem('userId'),
        points: 10,
      })
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    events.map((event) => {
      console.log(event);
      const api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.latitude},${event.longitude}&key=AIzaSyBa-slm6BMRwVIuR6zYz0wnzn-6tqCo4cw`;
      axios.get(api).then((res) => {
        if (res.data.results.length > 0) {
          console.log(res.data.results[0].formatted_address);
          const pl = {
            id: event.id,
            lat: event.latitude,
            lng: event.longitude,
            adress: res.data.results[0].formatted_address,
            name: event.name,
          };
          setPlaces((prev) => [...prev, pl]);
        }
      });
      setLoading(false);
    });
  }, [events]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {places.map((place) => {
            return (
              <div key={place.id}>
                <Typography variant="h6">{place.name}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={CheckLocation}
                >
                  Redeem
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

//
