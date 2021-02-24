import React from "react";
import useStyles from "./styles.photoCard";

import PhotoDetails from "../PhotoDetails";

export default function PhotoCard({ photo }) {
  const [cols, setCols] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setCols(((photo.height / photo.width) * 200) / 50);
  }, [photo]);

  const classes = useStyles({
    cols,
  });

  return (
    <>
      <div className={classes.imageContainer} onmoseo onClick={() => setOpen(true)}>
        <img src={photo.urls.thumb} alt={photo.alt_description} />
        <div className={classes.details}>
          <span className={classes.username}>{photo.user.name}</span>
          <span className={classes.likesCount}>{photo.likes}</span>
        </div>
      </div>
      <PhotoDetails photo={photo} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
