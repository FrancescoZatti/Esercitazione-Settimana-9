import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../actions/actions";
import { setCurrentSong } from "../actions/actions"; 
import { IoMdHeart } from "react-icons/io";

function Favorites() {
  const favoriteSongs = useSelector((state) => state.favoriteSongs);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (songId) => {
    dispatch(removeFromFavorites(songId));
  };

  const handleSongClick = (song) => {
    dispatch(setCurrentSong({
      title: song.title,
      albumCover: song.albumCover,
    }));
  };

  return (
    <div className="mainPage ms-4" style={{ marginBottom: "10%" }}>
        <div className="row justify-content-center mt-4">
            <div className="col-10 mainLinks d-flex justify-content-between">
            <a href="#a" style={{ textDecoration: "none" }}>
                TRENDING
            </a>
            <a href="#b" style={{ textDecoration: "none" }}>
                PODCAST
            </a>
            <a href="#c" style={{ textDecoration: "none" }}>
                MOODS AND GENRES
            </a>
            <a href="#d" style={{ textDecoration: "none" }}>
                NEW RELEASES
            </a>
            <a href="#e" style={{ textDecoration: "none" }}>
                DISCOVER
            </a>
            </div>
        </div>
    <div className="mt-5 ">
      <h2 className='text-white mb-4'>Favorite Songs</h2>
      <ol>
      {favoriteSongs.map((track) => (
        <li className="trackHover rounded-5 text-white me-5" key={track.id}>
          <div className="px-3 py-2 d-flex justify-content-between align-items-center" onClick={() => handleSongClick(track)}>
            <span className="text-white">{track.title}</span>
            <button className="btn btn-outline-danger rounded-5 py-0 px-2" onClick={() => handleRemoveFromFavorites(track.id)}>
                X
            </button>
          </div>
        </li>
      ))}
    </ol>
    </div>
    </div>
  );
}

export default Favorites;
