import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/MySidebar.jsx';
import Player from './components/MyPlayer.jsx';
import Home from './components/MyHome.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Container fluid style={{minHeight: '100vh'}}>
        <Row>
          <Sidebar className='col-2' />
          <div className='col-10'>
            <Home />
            <Player />
          </div>
        </Row>
        <Routes></Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
