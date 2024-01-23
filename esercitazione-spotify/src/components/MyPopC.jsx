import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyPopC() {
  const [data, setData] = useState([]);
  const option = {
    method: 'GET',
    url: 'https://striveschool-api.herokuapp.com/api/deezer/search?q=pop',
  };

  useEffect(() => {
    axios
      .request(option)
      .then((response) => {
        console.log(response.data.data.slice(0, 4));
        setData(response.data.data.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className='d-flex flex-nowrap justify-content-start'>
        {data.map((item, index) => (
          <div key={index} className="border-none text-center me-5" style={{background: 'none'}}>
            <div className="toAlbumPage fw-lighter mb-1 mt-2">
                <img
                src={item.album.cover}
                className="card-img-top"
                alt="Album Cover"
                />
                <p className='mb-0 mt-2'>Album: 
                    <span> {item.title}</span>
                </p>
            </div>
            <div className="toArtistPage fw-lighter mt-0">
              <p>Artist: 
                  <span> {item.artist.name}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}