import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  root: {
    display: "flex",
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "column",
    boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.45)",
    cursor: "pointer",
    transition: "box-shadow 200ms ease-in",
    maxHeight: ({ cols }) => cols * 50 + 50,
    gridRow: ({ cols }) => `span ${Math.round(cols)}`,
    "&:hover": {
      boxShadow: "4px 5px 6px 4px rgba(0,0,0,0.45)",
    },
  },
  details: {
    flex: 1,
    padding: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    fontSize: "1rem",
  },
  likes: {
    display: "flex",
    fontSize: "0.9rem",
    marginLeft: "4px",
    alignItems: "baseline",
  },
  likesCount: {
    marginLeft: "4px",
  },
  likeIcon: {
    color: "red",
  },
});
