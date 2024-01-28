import React from "react";
import { connect } from "react-redux";
import { IoMdHeart } from "react-icons/io";
import { addToFavorites, removeFromFavorites, setCurrentSong } from "../actions/actions";
import Next from "../assets/playerbuttons/Next.png";
import Shuffle from "../assets/playerbuttons/Shuffle.png";
import Play from "../assets/playerbuttons/Play.png";
import Previous from "../assets/playerbuttons/Previous.png";
import Repeat from "../assets/playerbuttons/Repeat.png";

function mapStateToProps(state) {
  return {
    currentSong: state.currentSong,
    favoriteSongs: state.favoriteSongs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToFavorites: (song) => dispatch(addToFavorites(song)),
    removeFromFavorites: (songId) => dispatch(removeFromFavorites(songId)),
    setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  };
}

function Player(props) {
  const { currentSong, addToFavorites, removeFromFavorites, favoriteSongs, setCurrentSong } = props;

  const handleLikeClick = () => {
    if (currentSong) {
      const isLiked = favoriteSongs.some((favTrack) => favTrack.id === currentSong.id);

      if (isLiked) {
        removeFromFavorites(currentSong.id);
      } else {
        addToFavorites(currentSong);
      }
    }
  };

  if (!currentSong) {
    return (
      <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row">
          <div className="col-lg-10 offset-lg-2">
            <div className="row">
              <div className="col-6 col-md-4 col-lg-4">
                <div className="d-flex flex-column">
                  <div className="playerControls mt-1">
                    <div className="d-flex align-items-center justify-content-between">
                      <a href="#">
                        <img src={Shuffle} alt="shuffle" />
                      </a>
                      <a href="#">
                        <img src={Previous} alt="previous" />
                      </a>
                      <a href="#">
                        <img src={Play} alt="play" />
                      </a>
                      <a href="#">
                        <img src={Next} alt="next" />
                      </a>
                      <a href="#">
                        <img src={Repeat} alt="repeat" />
                      </a>
                    </div>
                  </div>
                  <div className="row justify-content-center playBar py-3 ms-4">
                    <div className="col-8 col-md-6">
                      <div
                        className="progress"
                        style={{
                          color: "white",
                          backgroundColor: "#414141",
                          height: "3px",
                        }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-end">
                <p className="text-secondary"><IoMdHeart /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-4">
              <div className="d-flex align-items-center">
                <img
                  src={currentSong.albumCover}
                  alt="Album cover"
                  style={{ width: "auto", height: "5rem" }}
                />
                <div
                  className="ms-1"
                  style={{
                    borderBottom: "1px solid #414141",
                    minWidth: "60%",
                  }}
                >
                  <p
                    className="text-light fw-semibold ms-2 mb-1"
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {currentSong.title}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 playerControls mt-1">
              <div className="d-flex align-items-center justify-content-between">
                <a href="#">
                  <img src={Shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={Previous} alt="previous" />
                </a>
                <a href="#">
                  <img src={Play} alt="play" />
                </a>
                <a href="#">
                  <img src={Next} alt="next" />
                </a>
                <a href="#">
                  <img src={Repeat} alt="repeat" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-end">
              <p className="text-secondary">
                <IoMdHeart
                  className={`fs-5 text-white ${
                    favoriteSongs.some((favTrack) => favTrack.id === currentSong.id)
                      ? "text-danger"
                      : "opacity-25"
                  }`}
                  onClick={handleLikeClick}
                />
              </p>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div
                className="progress"
                style={{
                  color: "white",
                  backgroundColor: "#414141",
                  height: "3px",
                  maxWidth: "100%",
                }}
              >
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
