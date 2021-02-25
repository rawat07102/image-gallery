import React from "react";
import { makeStyles } from "@material-ui/styles";

import PhotoCard from "../PhotoCard";

const useStyles = makeStyles({
  root: {
    maxWidth: "1280px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 200px)",
    columnGap: "16px",
    rowGap: "16px",
  },
});

const PhotoGallery = ({ photos }) => {
  const classes = useStyles();

  if (!photos) {
    return <div>loading...</div>;
  }

  return (
    <main className={classes.root}>
      {photos &&
        photos.map((photo) => <PhotoCard photo={photo} key={photo.id} />)}
    </main>
  );
};

export default PhotoGallery;
