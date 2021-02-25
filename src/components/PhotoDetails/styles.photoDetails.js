import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  root: {
    display: "flex",
    padding: "8px",
    backgroundColor: "white",
    borderRadius: "10px"
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "16px"
  },
  names: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "8px",
  },
  userName: {
    fontSize: "1.2rem",
  },
  name: {
    marginTop: "4px",
    marginLeft: "4px",
    fontSize: "0.8rem",
    fontWeight: "400",
  },
  socialLinks: {
    display: "flex",
    flexDirection: "column",
  },
  twitterUsername: {
    display: "flex",
    alignItems: "baseline",
  },
  instagramUsername: {
    display: "flex",
    alignItems: "baseline",
  },
  icon: {
    margin: "0 4px"
  }
});
