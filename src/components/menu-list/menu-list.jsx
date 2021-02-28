import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import MenuListItem from '../menu-list-item';
import WithRestoService from '../higher-order component';
import Spinner from '../spinner';

import { menuRequested, createAddedToCartObject } from '../../actions';

import './menu-list.scss';

const MenuList = (props) => {
  useEffect(() => {
    menuRequested();
    const { menuLoaded } = props;
    const { RestoService } = props;
    RestoService.getMenuItems().then((res) => menuLoaded(res));
  }, []);

  const { menuItems, loading, addedToCart } = props;
  return (
    <>
      {loading ? <Spinner /> : null}
      <Container fluid className="bg-light p-4">
        <Row className="mx-auto">
          {
            menuItems.map((menuItem) => (
              <MenuListItem
                key={menuItem.id}
                menuItem={menuItem}
                onAddToCart={() => addedToCart(menuItem.id)}
              />
            ))
          }
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  menuItems: state.menu,
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  menuLoaded: (newMenu) => {
    dispatch({
      type: 'MENU_LOADED',
      payload: newMenu
    });
  },
  menuRequested,
  addedToCart: (id) => dispatch(createAddedToCartObject(id))
});

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
