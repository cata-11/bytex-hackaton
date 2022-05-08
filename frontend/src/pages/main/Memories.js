import React from 'react';
import PageLayout from './PageLayout';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Memories = () => {
  return (
    <PageLayout title="Memories">
      <ImageList
        // Reemove scrollbar
        sx={{ height: '97%' }}
        cols={3}
        // rowHeight={164}
        variant="quilted"
      >
        {/* Remove scroolbar */}
        {[...Array(20)].map((x, i) => (
          <ImageListItem key={i}>
            <img
              alt="img"
              src={'https://source.unsplash.com/random/' + i}
              loading="lazy"
            />
            <ImageListItemBar position="bottom" title={'1 APR'} />
          </ImageListItem>
        ))}
      </ImageList>
    </PageLayout>
  );
};

export default Memories;
