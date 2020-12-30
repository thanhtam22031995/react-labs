import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increment();
    dispatch(action);
  };
  const handleDecreaseClick = () => {
    const action = decrement();
    dispatch(action);
  };

  return (
    <div>
      <Typography component="h2" variant="h2">
        {count}
      </Typography>
      <Button
        onClick={handleDecreaseClick}
        variant="outlined"
        color="primary"
        style={{ marginRight: '0.5rem' }}
      >
        decrease
      </Button>
      <Button onClick={handleIncreaseClick} variant="outlined" color="primary">
        increase
      </Button>
    </div>
  );
}

export default CounterFeature;
