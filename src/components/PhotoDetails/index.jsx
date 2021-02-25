import { useTransition } from "react-spring";
import clsx from "clsx";
import useStyles from "./styles.photoDetails";
import Image from "../Image";
import Modal from "../Modal";
import { clientId } from "../../utils/axios";

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
        ({ item, props: style, key }) =>
          item && (
            <Modal key={key} style={style} onClose={onClose}>
              <main className={classes.root}>
                <Image
                  height={Math.min(photo.height, 400)}
                  ratio={photo.width / photo.height}
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                  imageClassName={classes.img}
                />
                <div className={classes.userInfo}>
                  <div className={classes.names}>
                    <a
                      className={classes.userName}
                      href={`${photo.user.links.html}?client_id=${clientId}`}
                    >
                      @{photo.user.username}
                    </a>
                    <h2 className={classes.name}>{photo.user.name}</h2>
                  </div>
                  <div className={classes.socialLinks}>
                    {photo.user.twitter_username && (
                      <span className={classes.twitterUsername}>
                        <i className={clsx("fa fa-twitter", classes.icon)}></i>
                        <a
                          href={`https://twitter.com/${photo.user.twitter_username}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {photo.user.twitter_username}
                        </a>
                      </span>
                    )}
                    {photo.user.instagram_username && (
                      <span className={classes.instagramUsername}>
                        <i
                          className={clsx("fa fa-instagram", classes.icon)}
                        ></i>
                        <a
                          href={`https://instagram.com/${photo.user.instagram_username}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {photo.user.instagram_username}
                        </a>
                      </span>
                    )}
                  </div>
                </div>
              </main>
            </Modal>
          )
      )}
    </>
  );
};

export default PhotoDetails;
