import clsx from "clsx";
import useStyles from "./styles.imageLoader";

const Image = ({
  src,
  alt,
  height,
  ratio,
  imageClassName,
  className,
  ...rest
}) => {
  const classes = useStyles({ width: ratio * height, height });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <img src={src} alt={alt} className={clsx(classes.img, imageClassName)} />
    </div>
  );
};

export default Image;
