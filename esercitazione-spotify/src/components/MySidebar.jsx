import React, { useState } from 'react';
import { Navbar, InputGroup } from 'react-bootstrap';
import Logo from '../assets/logo/Spotify_Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen } from '@fortawesome/free-solid-svg-icons';

export default function MySidebar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?q=${searchTerm}`);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
    
    if (inputValue.trim() === '') {
      navigate('/');
    } else {
      navigate(`/search?q=${inputValue}`);
    }
  };

  return (
    <div className="col-2">
      <Navbar className="fixed-left">
        <div className="nav-container d-flex justify-content-between align-items-center flex-column mx-1">
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Spotify_Logo" width="131" height="40" />
          </Navbar.Brand>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Navbar className="navbar-nav">
              <ul className="ps-0">
                <li className="ps-4">
                  <Link className="nav-item nav-link" to="/">
                    <FontAwesomeIcon icon={faHome} /> Home{" "}
                  </Link>
                </li>
                <li className="ps-4">
                  <Link className="nav-item nav-link" to="/your-library">
                    <FontAwesomeIcon icon={faBookOpen} className="fa-lg" /> Your Library{" "}
                  </Link>
                </li>
                <InputGroup className="input-group mt-3 px-3">
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                  <div style={{ marginBottom: "4%" }}>
                    <button
                      className="btn btn-outline-secondary btn-sm h-100"
                      type="button"
                      onClick={handleSearch}
                    >
                      GO
                    </button>
                  </div>
                </InputGroup>
              </ul>
            </Navbar>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
