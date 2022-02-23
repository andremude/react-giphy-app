import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Gif from "./components/Gif";
import GifList from "./components/GifList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [query, setQuery] = useState("");
  const [gifsList, setGifsList] = useState([]);
  const [selectedGif, setSelectedGif] = useState({
    id: "ASd0Ukj0y3qMM",
    images: {
      downsized: {
        url: "https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif",
      },
    },
  });

  useEffect(() => {
    if (query !== "") {
      getGifs();
    }
  }, [query]);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${query}&limit=20`;
    const response = await axios.get(url);
    console.log(response);
    setGifsList(response.data.data);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar setQuery={setQuery} />
        <div className="selected-gif">
          <Gif url={selectedGif.images.downsized.url} />
        </div>
      </div>
      <div className="right-scene">
        <GifList
          gifsList={gifsList}
          setSelectedGif={setSelectedGif}
        />
      </div>
    </div>
  );
};

export default App;
