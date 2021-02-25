import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  root: {
    margin: "auto",
    height: "100px",
    maxWidth: "1280px",
    width: "90vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "16px",
  },
  searchField: {
    position: "relative",
    padding: "8px",
    backgroundColor: "rgba(200, 200, 200, 0.4)",
    width: "200px",
    overflow: "hidden",
    border: (focus) => (focus ? "2px solid black" : "none"),
    borderRadius: "10px",
    boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.45)",
  },
  input: {
    height: "24px",
    width: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: "0.95rem",
  },
  label: {
    position: "absolute",
    top: "55%",
    transform: "translateY(-50%)",
    opacity: "0.5",
  },
});
