import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/MySidebar.jsx';
import Player from './components/MyPlayer.jsx';
import Home from './pages/MyHome.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Album from './pages/MyAlbum.jsx';
import Artist from './pages/MyArtist.jsx';
import MySearch from './pages/MySearch.jsx';
import Favorites from './pages/MyFavourite.jsx';


function App() {

  return (
    <BrowserRouter>
      <Container fluid style={{ minHeight: "100vh" }}>
        <Row>
          <Sidebar className="col-2" />
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/album/:id" element={<Album />} />
              <Route path="/artist/:id" element={<Artist />} />
              <Route path="/search" element={<MySearch />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
            <Player />
          </div>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
