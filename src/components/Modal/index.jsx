import React from "react";
import { animated } from "react-spring";
import clsx from "clsx";
import useStyles from "./styles.modal";

const Modal = ({ children, onClose, contentClassName, style }) => {
  const classes = useStyles();

  return (
    <animated.div style={style}>
      <div onClick={onClose} className={classes.overlay}></div>
      <main className={clsx(classes.content, contentClassName)}>
        {children}
      </main>
    </animated.div>
  );
};

export default Modal;
