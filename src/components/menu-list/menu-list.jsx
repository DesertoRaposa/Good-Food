import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';

const MenuList = () => (
  <Container fluid className="bg-light p-4">
    <Row className="mx-auto">
      <Col md="3">
        <MenuListItem />
      </Col>
      <Col md="3">
        <MenuListItem />
      </Col>
      <Col md="3">
        <MenuListItem />
      </Col>
      <Col md="3">
        <MenuListItem />
      </Col>
    </Row>
    <Row className="mx-auto">
      <Col md="3">
        <MenuListItem />
      </Col>
      <Col md="3">
        <MenuListItem />
      </Col>
      <Col md="3">
        <MenuListItem />
      </Col>
      <Col md="3">
        <MenuListItem />
      </Col>
    </Row>
  </Container>
);

export default MenuList;
