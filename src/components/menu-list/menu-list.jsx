import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import WithRestoService from '../higher-order component';

class MenuList extends Component {
  componentDidMount() {
    const { menuLoaded } = this.props;
    const { RestoService } = this.props;
    RestoService.getMenuItems()
      .then((res) => menuLoaded(res));
  }

  render() {
    const { menuItems } = this.props;
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
  menuItems: state.menu
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

//   const firstArr = [[]];

//   menuItems.forEach((item, i) => {
//     firstArr[firstArr.length - 1].push(item)
//     if ((i + 1) % 4 === 0 && i != (menuItems.length - 1)) {
//       firstArr.push([])
//     }
// });
//   console.log(firstArr);

//   firstArr.forEach((row_data) => {
//     row_data.forEach((col_data) => {
//       console.log(col_data)
//     })
//   });
