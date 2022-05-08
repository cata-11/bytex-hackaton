import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Memories = () => {
  return (
    <>
      <ImageList
        // Reemove scrollbar
        sx={{ height: "82vh" }}
        cols={3}
        // rowHeight={164}
        variant="quilted"
      >
        {/* Remove scroolbar */}
        {[...Array(20)].map((x, i) => (
          <ImageListItem key={i}>
            <img
              alt="img"
              src={"https://source.unsplash.com/random/" + i}
              loading="lazy"
            />
            <ImageListItemBar position="bottom" title={"1 APR"} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Memories;
