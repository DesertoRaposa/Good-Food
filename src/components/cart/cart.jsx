import React from 'react';
import './cart-table.scss';
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import { GrClose } from 'react-icons/gr';

const Cart = () => (
  <>
    <Container fluid className="bg-light p-4">
      <Row className="mx-auto">
        <Col>
          <h2 className="text-center">Your order</h2>
        </Col>
      </Row>
      <Row className="mx-auto w-75 d-flex flex-column">
        <Col className="cart__card my-4 d-flex flex-column flex-md-row align-items-center p-0 m-0">
          <Col md={4} className="p-0 m-0">
            <Image className="cart-img" src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80" />
          </Col>
          <Col md={6} className="cart__title">
            Pancakes
            <p className="description mt-2">
              A pancake is a flat cake, often thin and round, prepared from a starch-based batter
            </p>
          </Col>
          <Col md={2} className="text-center p-2">12$</Col>
          <div className="cart__close">
            <GrClose />
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default Cart;
