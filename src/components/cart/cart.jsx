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
      items.map((item, i) => {
        const {
          title,
          price,
          url,
          id
        } = item;
        return (
          <Col key={id + ' ' + i} className="cart__card my-4 d-flex flex-column flex-md-row align-items-center p-0 m-0">
            <Col md={4} className="p-0 m-0">
              <Image className="cart-img" src={url} alt={title} />
            </Col>
            <Col md={6} className="cart__title">
              {title}
              <p className="description mt-2">
                A pancake is a flat cake, often thin and round, prepared from a starch-based
              </p>
            </Col>
            <Col md={2} className="text-center p-2">
              {price}
              $
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
