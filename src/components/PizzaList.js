// PizzaList.js
import React from 'react';
import { connect } from 'react-redux';
import { selectPizza } from '../slices/pizzaActions';

const pizzas = [
  { id: 1, name: 'Pizza Margherita', price: 10 },
  { id: 2, name: 'Pizza Pepperoni', price: 12 },
  { id: 3, name: 'Pizza Hawaiian', price: 11 },
  { id: 4, name: 'Pizza Vegetarian', price: 9 },
];

const PizzaList = ({ selectPizza }) => {
  return (
    <div>
      {pizzas.map((pizza) => (
        <div key={pizza.id} onClick={() => selectPizza(pizza)}>
          <img src={`path/to/${pizza.name}.jpg`} alt={pizza.name} />
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = {
  selectPizza,
};

export default connect(null, mapDispatchToProps)(PizzaList);
