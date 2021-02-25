import React from "react";
import clsx from "clsx";
import Image from '../Image'
import useStyles from "./styles.photoCard";

import PhotoDetails from "../PhotoDetails";

const calcCols = (height, width) => ((height / width) * 200) / 50;

export default function PhotoCard({ photo }) {
  const [cols, setCols] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setCols(calcCols(photo.height, photo.width));
  }, [photo]);

  const classes = useStyles({
    cols,
  });

  return (
    <>
      <div className={classes.root} onClick={() => setOpen(true)}>
        <Image src={photo.urls.thumb} alt={photo.alt_description} height={cols * 50} />
        <div className={classes.details}>
          <span className={classes.username}>{photo.user.name}</span>
          <div className={classes.likes}>
            <i className={clsx("fas fa-heart", classes.likeIcon)}></i>
            <span className={classes.likesCount}>{photo.likes}</span>
          </div>
        </div>
      </div>
      <PhotoDetails photo={photo} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
