import React from "react";
import usePhotosApi from './hooks/usePhotosApi'

import PhotoGallery from "./components/PhotoGallery";
import SearchBar from "./components/SearchBar";

function App() {

  const {query, handleChange, photos} = usePhotosApi()

  return (
    <>
      <SearchBar query={query} handleChange={handleChange} />
      <PhotoGallery photos={photos} />
    </>
  );
}

export default App;
