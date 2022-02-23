import React from "react";
import Gif from "./Gif";

const GifList = ({ gifsList, setSelectedGif }) => {
  return (
    <div className="gif-list">
      {gifsList.map((gif) => {
        return (
          <Gif
            key={gif.id}
            url={gif.images.downsized.url}
            setSelectedGif={setSelectedGif}
            gif={gif}
          />
        );
      })}
    </div>
  );
};

export default GifList;
