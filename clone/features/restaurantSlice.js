import { createSlice } from '@reduxjs/toolkit';

export const restuarantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant=action.payload
    }
    
  
}});


export const { setRestaurant } = restuarantSlice.actions;


export const selectRestuarant = (state) => state.restuant.restaurant;

export default restuarantSlice.reducer;
