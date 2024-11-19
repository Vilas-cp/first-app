import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    // Add items to the basket
    addtoBasket: (state, action) => {
      // Assuming action.payload is an item object or an array of items
      state.items = [...state.items, action.payload];
    },

    // Remove an item from the basket (using id or index)
    removeFromBasket: (state, action) => {

      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket=[...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);  // Remove item by index
      }else{
        console.warn(`Can't remove product (id: ${action.payload.id}) as it is not in the basket!`);
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoBasket, removeFromBasket } = basketSlice.actions;

// Selector to get items from the basket state
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item)=>item.id===id);

export default basketSlice.reducer;
