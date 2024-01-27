import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MyPopC() {
  const [data, setData] = useState([]);
  const option = {
    method: 'GET',
    url: 'https://striveschool-api.herokuapp.com/api/deezer/search?q=pop',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(option);
        console.log(response.data.data.slice(0, 6));

        // Rimuovi album con stesso nome nella prima parola e artista
        const uniqueAlbums = [];
        response.data.data.forEach((item) => {
          const albumKey = `${item.album.title.split(' ')[0].toLowerCase()}-${item.artist.name.toLowerCase()}`;
          const existingAlbum = uniqueAlbums.find((album) => albumKey === album.key);
          if (!existingAlbum) {
            uniqueAlbums.push({ ...item, key: albumKey });
          }
        });

        setData(uniqueAlbums.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
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
    </>
  );
}

