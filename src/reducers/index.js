const initialState = {
  menu: [],
  loading: true,
  items: [],
  totalPrice: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state, // во избежание дублирования содержимого initialState каждый раз
        menu: action.payload,
        loading: false
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true
      };
    case 'ITEM_ADD_TO_CART': {
      const id = action.payload;

      const itemIndx = state.items.findIndex((item) => item.id === id);
      if (itemIndx >= 0) {
        const itemInState = state.items.find((item) => item.id === id);
        const newItem = {
          ...itemInState,
          quantity: ++itemInState.quantity
        };
        // console.log(state.items);
        return {
          ...state,
          items: [
            ...state.items.slice(0, itemIndx),
            newItem,
            ...state.items.slice(itemIndx + 1)
          ],
          totalPrice: state.totalPrice + newItem.price
        };
      }

      const item = state.menu.find((item1) => item1.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
        quantity: 1
      };
      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ],
        totalPrice: state.totalPrice + newItem.price
      };
    }
    case 'ITEM_REMOVE_FROM_CART': {
      const idx = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === idx);
      const price = state.items[itemIndex.price] * state.items[itemIndex.quantity];
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ],
        totalPrice: state.totalPrice - price
      };
    }
    default:
      return state;
  }
};

export default reducer;
