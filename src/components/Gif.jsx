import React from "react";

const Gif = ({ url, setSelectedGif, gif }) => {
  return (
    <img
      src={url}
      alt=""
      className="gif"
      onClick={() => setSelectedGif(gif)}
    />
  );
};

export default Gif;
