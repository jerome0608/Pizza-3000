const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
      pizzas: [
        { id: 1, name: '4 Frommages', price: 9 },
        { id: 2, name: 'Marguerita', price: 7.90 },
        { id: 3, name: 'Pepperoni', price: 11.90 },
        { id: 4, name: 'Reine', price: 10 },
      ],
      selectedPrice: null,
    },
    reducers: {
      selectPizzaPrice: (state, action) => {
        const { pizzaId } = action.payload;
        const selectedPizza = state.pizzas.find((pizza) => pizza.id === pizzaId);
        state.selectedPrice = selectedPizza ? selectedPizza.price : null;
      },
    },
  });
  
export const { selectPizzaPrice } = pizzaSlice.actions;
export const selectSelectedPrice = (state) => state.pizza.selectedPrice;
  