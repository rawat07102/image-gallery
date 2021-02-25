import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  root: {
    paddingBottom: ({height}) => height,
    width: ({width}) => width,
    maxHeight: ({height}) => height,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  img: {
    maxHeight: ({height}) => height
  }
});
