import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import IconButton from '@mui/material/IconButton';

import beer1 from '../assets/beer1.jpg';
import beer2 from '../assets/beer2.jpg';
import beer3 from '../assets/beer3.jpg';
import beer4 from '../assets/beer4.jpg';

import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
}

const EventCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        minWidth: '250px',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        margin: '25px 0px'
      }}
    >
      <CardContent>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ width: 45, height: 45 }}>M</Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: 16 }} ml="10px">
              mihaita_boss87
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary" ml="10px">
              8 hours ago
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', margin: '25px 0px' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <LocationOnIcon sx={{ color: theme.palette.text.secondary }} />
            <Typography
              sx={{ fontSize: 14, textDecoration: 'underline' }}
              color="text.secondary"
              ml="10px"
            >
              Curtea Berarilor Timișoreana
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: '10px'
            }}
          >
            <PeopleAltIcon sx={{ color: theme.palette.text.secondary }} />
            <Typography
              sx={{ fontSize: 14, textDecoration: 'underline' }}
              color="text.secondary"
              ml="10px"
            >
              vericu00, vericu01 & vericu03
            </Typography>
          </Box>
        </Box>

        <ImageList variant="quilted" cols={4} rowHeight={121}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
      {/* <CardActions>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
          <Typography
            sx={{ fontSize: 16, fontWeight: "500" }}
            color="text.secondary"
            ml="5px"
          >
            3
          </Typography>
        </Box>
      </CardActions> */}
    </Card>
  );
};

const itemData = [
  {
    img: beer1,
    title: 'Breakfast',
    rows: 2,
    cols: 2
  },
  {
    img: beer2,
    title: 'Burger'
  },
  {
    img: beer3,
    title: 'Camera'
  },
  {
    img: beer4,
    title: 'Coffee',
    cols: 2
  }
];

export default EventCard;
