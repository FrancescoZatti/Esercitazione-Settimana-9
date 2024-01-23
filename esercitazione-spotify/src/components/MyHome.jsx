import React from "react";
import MyRock from "./MyRock";
import MyPopC from "./MyPopC";
import MyHipHop from "./MyHipHop";

export default function Home() {
  return (
    <div className="mainPage">
      <div className="row justify-content-center mt-4">
        <div className="col-10 mainLinks d-flex justify-content-between">
          <a href="#a" style={{ textDecoration: 'none' }}>TRENDING</a>
          <a href="#b" style={{ textDecoration: 'none' }}>PODCAST</a>
          <a href="#c" style={{ textDecoration: 'none' }}>MOODS AND GENRES</a>
          <a href="#d" style={{ textDecoration: 'none' }}>NEW RELEASES</a>
          <a href="#e" style={{ textDecoration: 'none' }}>DISCOVER</a>
        </div>
      </div>

      {/* RISULTATI DELLA RICERCA */}
      {/* <div className="row d-none">
          <div className="col-10">
              <div id="searchResults" style={{ display: 'none' }}> 
                  <h2>Search Results</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
              </div>
          </div>
      </div> */}

      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <MyRock />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <MyPopC />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <MyHipHop />
          </div>
        </div>
      </div>
    </div>
  );
}
