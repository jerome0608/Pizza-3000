import React from 'react';
import { useDispatch } from 'react-redux';
import { selectPizza } from '../slices';

const Pizza = ({ pizza }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectPizza(pizza));
  };

  return (
    <div>
      <img src={pizza.image} alt={pizza.name} onClick={handleClick} />
    </div>
  );
};

export default Pizza;
