import { createSlice } from '@reduxjs/toolkit';
import Fromages from "../img/pizzas/4-fromages.jpg";
import Marguerita from "../img/pizzas/marguerita.jpg";
import Pepperoni from "../img/pizzas/pepperoni.jpg";
import Reine from "../img/pizzas/reine.jpg";

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: [
      { id: 1, name: 'Pizza Margherita', price: 10, image : Marguerita },
      { id: 2, name: 'Pizza Pepperoni', price: 12, image : Pepperoni },
      { id: 3, name: 'Pizza Reine', price: 11, image : Reine },
      { id: 4, name: 'Pizza Quattro Formaggi sisi italia', price: 13, image : Fromages },
    ],
    selectedPizza: null,
  },
  reducers: {
    selectPizza: (state, action) => {
      state.selectedPizza = action.payload;
    },
  },
});

export const { selectPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
