import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Memories = () => {
  return (
    <>
      <ImageList sx={{ height: "80vh" }} cols={3} variant="quilted">
        {[...Array(20)].map((x, i) => (
          <ImageListItem key={i}>
            <img
              alt="img"
              src={"https://source.unsplash.com/random/" + i}
              loading="lazy"
            />
            <ImageListItemBar position="bottom" title={i + 1 + " April"} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Memories;
