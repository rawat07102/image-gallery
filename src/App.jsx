import React from "react";

import { makeStyles } from "@material-ui/styles";
import axios from "./utils/axios";

import PhotoCard from "./components/PhotoCard";

const useStyles = makeStyles({
  root: {
    maxWidth: "1280px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 200px)",
    columnGap: "16px",
    rowGap: "16px",
  },
});

function App() {
  const [photos, setPhotos] = React.useState(null);
  const classes = useStyles();

  React.useEffect(() => {
    axios
      .get("/photos", {
        params: {
          per_page: "50",
        },
      })
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      });
  }, []);

  if (!photos) {
    return <div>loading...</div>;
  }

  return (
    <main className={classes.root}>
      {photos.map((photo) => (
        <PhotoCard photo={photo} key={photo.id} />
      ))}
    </main>
  );
}

export default App;
