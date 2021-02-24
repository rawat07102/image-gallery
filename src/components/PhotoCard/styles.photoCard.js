import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  imageContainer: {
    boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.45)",
    cursor: "pointer",
    transition: "all 0.1s ease-in",
    gridRow: ({ cols, }) => `span ${Math.round(cols)}`,
    "&:hover": {
      boxShadow: "4px 5px 6px 4px rgba(0,0,0,0.45)",
    },
  },
  details: {
    padding: "8px",
    display: "flex",
    justifyContent: "space-between",
  },
  username: {
    fontSize: "1rem",
    display: "block",
  },
  likes: {
    fontSize: "0.9rem",
  },
});
