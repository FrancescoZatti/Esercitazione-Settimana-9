import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MyRock() {
  const [data, setData] = useState([]);
  const option = {
    method: 'GET',
    url: 'https://striveschool-api.herokuapp.com/api/deezer/search?q=rock',
  };

  useEffect(() => {
    axios
      .request(option)
      .then((response) => {
        console.log(response.data.data.slice(0, 6));
        setData(response.data.data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className='d-flex flex-nowrap justify-content-between' style={{width: '200px'}}>
        {data.map((item, index) => (
          <div key={index} className="border-none text-center me-5" style={{background: 'none'}}>
            <Link to={`/album/${item.album.id}`} className="toAlbumPage fw-lighter mb-1 mt-2">
                <img
                src={item.album.cover_big}
                className="card-img-top"
                alt="Album Cover"
                />
                <span> {item.album.title}</span>
            </Link>
            <Link
              to={`/artist/${item.artist.id}`}
              className="text-decoration-none"
            >
              <p className="toArtistPage artist-name fw-normal">{item.artist.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

