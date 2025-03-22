export const addItemToCart = (cart, action) => {
  for (let item of cart) {
    if (item.id === action.payload) {
      item.qty += 1;
      return;
    }
  }
  cart.push({ id: action.payload, qty: 1 });
};

export const removeItemFromCart = (state, action) => {
  console.log("state", state, action);
  let filtered = state.filter((item) => item?.id !== action.payload);
  state.length = 0;
  state.push(...filtered);
};

export const decreaseItemQty = (state, action) => {
  let newArr = state.map((item) => {
    if (item?.id === action.payload) {
      return { ...item, qty: item?.qty - 1 };
    } else {
      return item;
    }
  });
  newArr = newArr.filter((item) => item?.qty > 0);
  state.length = 0;
  state.push(...newArr);
};
