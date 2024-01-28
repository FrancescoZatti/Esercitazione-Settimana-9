import React from "react";
import MyRock from "../components/MyRock";
import MyPopC from "../components/MyPopC";
import MyHipHop from "../components/MyHipHop";

export default function Home() {
  return (
    <div className="mainPage ms-4" style={{ marginBottom: '10%'}}>
      <div className="row justify-content-center mt-4">
        <div className="col-10 mainLinks d-flex justify-content-between">
          <a href="#a" style={{ textDecoration: 'none' }}>TRENDING</a>
          <a href="#b" style={{ textDecoration: 'none' }}>PODCAST</a>
          <a href="#c" style={{ textDecoration: 'none' }}>MOODS AND GENRES</a>
          <a href="#d" style={{ textDecoration: 'none' }}>NEW RELEASES</a>
          <a href="#e" style={{ textDecoration: 'none' }}>DISCOVER</a>
        </div>
      </div>
      <div className="mt-5 ps-0 ms-0">
        <div className="ps-0 ms-0">
          <div id="rock classics ps-0 ms-0">
            <h2 className="text-white mb-4">Rock Classics</h2>
            <div>
                <MyRock />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 ps-0 ms-0">
        <div className="ps-0 ms-0">
          <div id="pop ps-0 ms-0">
            <h2 className="text-white mb-4">Pop Culture</h2>
            <div>
                <MyPopC />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 ps-0 ms-0">
        <div className="ps-0 ms-0">
          <div id="hiphop ps-0 ms-0">
            <h2 className="text-white mb-4">HipHop</h2>
            <div>
                <MyHipHop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
