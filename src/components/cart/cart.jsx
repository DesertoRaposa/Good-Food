import React from 'react';

import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

import { GrClose } from 'react-icons/gr';
import { connect } from 'react-redux';

import { createDeleteFromCartObject } from '../../actions';

import './cart-table.scss';

const Cart = ({ items, deleteFromCart }) => (
  <Container fluid className="bg-light p-4">
    <Row className="mx-auto">
      <Col>
        <h2 className="text-center">Your order</h2>
      </Col>
    </Row>
    <Row className="mx-auto w-75 d-flex flex-column">
      {
      items.map((item) => {
        const { title, price, url, id, quantity } = item;
        const totalPrice = price * quantity;
        return (
          <Col key={id} className="cart__card my-4 d-flex flex-column flex-md-row align-items-top p-0 m-0">
            <Col md={4} className="p-0 m-0">
              <Image className="cart-img" src={url} alt={title} />
            </Col>
            <Col md={5} className="cart__title p-4">
              {title}
              <p className="description mt-2">
                A pancake is a flat cake, often thin and round, prepared from a starch-based
              </p>
            </Col>
            <Col md={3} className="text-center pt-4 d-flex flex-row justify-content-around">
              <div className="mr-3 cart__price">
                Quantity
                <span className="d-block cart__quantity">{quantity}</span>
              </div>
              <div className="cart__price">
                Price
                <span className="d-block cart__quantity">
                  {totalPrice}
                  $
                </span>
              </div>
            </Col>
            <div onClick={() => deleteFromCart((id))} className="cart__close">
              <GrClose />
            </div>
          </Col>
        );
      })
    }
    </Row>
  </Container>
);

const mapStateToProps = ({ items }) => ({
  items
});

const mapDispatchToProps = (dispatch) => ({
  deleteFromCart: (id) => dispatch(createDeleteFromCartObject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
