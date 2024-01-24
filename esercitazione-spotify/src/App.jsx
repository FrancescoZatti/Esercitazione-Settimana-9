import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/MySidebar.jsx';
import Player from './components/MyPlayer.jsx';
import Home from './pages/MyHome.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Album from './pages/MyAlbum.jsx';
import Artist from './pages/MyArtist.jsx';

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
            </Routes>
            <Player />
          </div>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
