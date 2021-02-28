const menuLoaded = (newMenu) => (
  {
    type: 'MENU_LOADED',
    payload: newMenu
  }
);

const menuRequested = () => (
  {
    type: 'MENU_REQUESTED'
  }
);

const createAddedToCartObject = (id) => (
  {
    type: 'ITEM_ADD_TO_CART',
    payload: id
  }
);

const createDeleteFromCartObject = (id) => (
  {
    type: 'ITEM_REMOVE_FROM_CART',
    payload: id
  }
);

export {
  menuLoaded,
  menuRequested,
  createAddedToCartObject,
  createDeleteFromCartObject
};
