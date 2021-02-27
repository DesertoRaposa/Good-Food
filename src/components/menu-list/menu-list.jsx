import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import WithRestoService from '../higher-order component';
import Spinner from '../spinner';

class MenuList extends Component {
  componentDidMount() {
    const { menuLoaded } = this.props;
    const { RestoService } = this.props;
    RestoService.getMenuItems()
      .then((res) => menuLoaded(res));
  }

  render() {
    const { menuItems, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Container fluid className="bg-light p-4">
        <Row className="mx-auto">
          { menuItems.map((menuItem) => <MenuListItem key={menuItem.id} menuItem={menuItem} />) }
        </Row>
      </Container>
    );
  }
}

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
  }
});

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
