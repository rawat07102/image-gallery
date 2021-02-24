import { makeStyles } from "@material-ui/styles";
export default makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  overlay: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  }
});
