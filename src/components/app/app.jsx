import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import AppHeader from '../app-header';
import MainPage from '../pages/main-page';
import Cart from '../cart';

import './app.scss';

const App = () => (
  <HashRouter basename="/DesertoRaposa/Good-Food">
    <Container className="page">
      <Row>
        <Col />
        <Col md="10" className="content my-5 p-0">
          <AppHeader />
          <Route path="/cart" component={Cart} />
          <Route path="/menu" component={MainPage} />
        </Col>
      </Row>
    </Container>
  </HashRouter>
);

export default (App);
