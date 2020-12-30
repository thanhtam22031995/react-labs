import studentReducer from 'features/Student/reducer';
import todoReducer from 'features/Todo/reducer';
import counterReducer from 'features/Counter/counterSlice';

// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#combining-reducers

const rootReducer = {
  todos: todoReducer,
  students: studentReducer,
  counter: counterReducer,
};
// key la ten cua state
export default rootReducer;
