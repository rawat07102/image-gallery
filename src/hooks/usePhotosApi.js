import React from "react";
import axios from "../utils/axios";
import { throttle } from "lodash";

const fetchSearchResults = throttle(
  (query) =>
    axios.get("/search/photos", {
      params: {
        query,
        per_page: "10",
      },
    }),
  100
);

const usePhotosApi = () => {
  const [photos, setPhotos] = React.useState(null);
  const [query, setQuery] = React.useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  React.useEffect(() => {
    if (!query) {
      axios
        .get("/photos", {
          params: {
            per_page: "10",
          },
        })
        .then((res) => {
          setPhotos(res.data);
        });
    }
  }, [query]);

  React.useEffect(() => {
    if (query) {
      fetchSearchResults(query).then((res) => setPhotos(res.data.results));
    }
  }, [query]);

  return { photos, query, handleChange };
};

export default usePhotosApi;
