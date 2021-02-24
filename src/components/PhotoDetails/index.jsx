import { useTransition } from "react-spring";
import useStyles from "./styles.photoDetails";
import Modal from "../Modal";

const PhotoDetails = ({ photo, open, onClose }) => {
  const classes = useStyles();

  const transitions = useTransition(open, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {transitions.map(
        ({ item, props: style }) =>
          item && (
            <Modal style={style} onClose={onClose}>
              <main className={classes.root}>
                <img
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                  className={classes.img}
                />
              </main>
            </Modal>
          )
      )}
    </>
  );
};

export default PhotoDetails;
