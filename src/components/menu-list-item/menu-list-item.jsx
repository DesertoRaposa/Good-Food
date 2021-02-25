import React from 'react';
import './menu-list-item.scss';
import { Card, Button, Badge } from 'react-bootstrap';

const MenuListItem = () => (
  <>
    <Card className="my-4 menu__card  text-center border-0">
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1116&q=80" />
      <Card.Body className="px-3 border-0">
        <Card.Title className="menu__title"> Vegetable salad</Card.Title>
        <Card.Text className="p-0 m-0 menu__card_font">
          Category:
          <Badge variant="dark p-1 ml-2">salads</Badge>
        </Card.Text>
        <Card.Text className="p-0 m-0 menu__card_font mb-2">
          12$
        </Card.Text>
        <Button variant="" className="menu__btn">Add to cart</Button>
      </Card.Body>
    </Card>
  </>
);

export default MenuListItem;
