import React from 'react';
import { useSelector } from 'react-redux';
import Pizza from './components/Pizza';

const App = () => {
  const pizzas = useSelector((state) => state.pizzas);
  const selectedPizza = useSelector((state) => state.selectedPizza);

  return (
    <div>
      <h1>Pizza Menu</h1>
      <div>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
      <div>
        {selectedPizza && (
          <p>
            Selected Pizza: {selectedPizza.name} - Price: ${selectedPizza.price}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
