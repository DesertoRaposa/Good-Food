import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import AppHeader from '../app-header';
import MainPage from '../pages/main-page';

import './app.scss';

const App = () => (
  <Container className="page">
    <Row>
      <Col />
      <Col md="10" className="content my-5 p-0">
        <AppHeader />
        <MainPage />
      </Col>
    </Row>
  </Container>
);

export default App;
