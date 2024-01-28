import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

export default function MySearch() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm) {
          const response = await axios.get(`https://striveschool-api.herokuapp.com/api/deezer/search?q=(${searchTerm})`);
          setData(response.data.data.slice());
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="mainPage ms-4" style={{ marginBottom: '10%' }}>
      <div className="row justify-content-center mt-4">
        <div className="col-10 mainLinks d-flex justify-content-between">
          <a href="#a" style={{ textDecoration: 'none' }}>TRENDING</a>
          <a href="#b" style={{ textDecoration: 'none' }}>PODCAST</a>
          <a href="#c" style={{ textDecoration: 'none' }}>MOODS AND GENRES</a>
          <a href="#d" style={{ textDecoration: 'none' }}>NEW RELEASES</a>
          <a href="#e" style={{ textDecoration: 'none' }}>DISCOVER</a>
        </div>
      </div>
      <div className='mt-5 ps-0 ms-0'>
        <div className='ps-0 ms-0'>
          <div id="search ps-0 ms-0">
            <h2 className='text-white mb-4'>Your Search</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 pe-5 ps-0 ms-0">
            {data.map((item, index) => (
                <div key={index} className="col mb-4 ps-0 ms-0">
                    <div className="border-none text-center ps-0 ms-0" style={{ background: 'none' }}>
                    <Link to={`/album/${item.album.id}`} className="text-decoration-none toAlbumPage fw-lighter mb-1 mt-2 d-block">
                        <img
                        src={item.album.cover_big}
                        className="card-img-top mx-auto"
                        alt="Album Cover"
                        />
                        <span className="d-block">{item.album.title}</span>
                    </Link>
                    <Link to={`/artist/${item.artist.id}`} className="text-decoration-none toAlbumPage fw-lighter mb-1 mt-2">
                        <p className="toArtistPage artist-name fw-normal">{item.artist.name}</p>
                    </Link>
                    </div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
