import React from 'react';
import './menu-list-item.scss';
import {
  Card,
  Button,
  Badge,
  Col
} from 'react-bootstrap';

const MenuListItem = ({ menuItem }) => {
  const {
    title,
    price,
    url,
    category
  } = menuItem;
  return (
    <>
      <Col xs={6} lg={3}>
        <Card className="my-4 menu__card  text-center border-0">
          <Card.Img variant="top" src={url} className="img-size" />
          <Card.Body className="px-3 border-0">
            <Card.Title className="menu__title mb-1">
              { title }
            </Card.Title>
            <Card.Text className="p-0 m-0 menu__card_font">
              Category:
              <Badge variant="dark p-1 ml-2 font-weight-normal">{ category }</Badge>
            </Card.Text>
            <Card.Text className="p-0 m-0 menu__card_font mb-2">
              {price}
              $
            </Card.Text>
            <Button variant="" className="menu__btn">Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MenuListItem;
