import { Box, Button, ButtonGroup, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './action';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function TodoFeature(props) {
  // connect to redux store
  const todos = useSelector((state) => state.todos.list);
  // const todosFilters = useSelector((state) => state.todos.filters);

  console.log(todos);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = addTodo({ id: 2, title: 'eating' });
    dispatch(action);
  }, [dispatch]);

  const [todoList, setTodoList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('todo_list')) || [];
    } catch (error) {}
    return [
      {
        id: 1,
        value: 'Eat',
        description: 'haha',
        completed: false,
      },
      {
        id: 2,
        value: 'Code',
        description: 'haha',
        completed: false,
      },
      {
        id: 3,
        value: 'Sleep',
        description: 'haha',
        completed: true,
      },
    ];
  });

  const [filters, setFilters] = useState({
    completed: 'all',
  });

  useEffect(() => {
    localStorage.setItem('todo_list', JSON.stringify(todoList));
  }, [todoList]);

  const [selectedTodo, setSelectedTodo] = useState(null);
  const handleRemoveItem = (todo) => {
    // const newTodoList = [...todoList];
    // newTodoList.splice(idx, 1);
    // setTodoList(newTodoList);
    setTodoList((currentList) => currentList.filter((x) => x.id !== todo.id));
  };
  // const [hidden, setHidden] = useState(false);

  const handleEditClick = (todo) => {
    // setHidden(true);
    setSelectedTodo(todo);

    // setTimeout(() => setHidden(false));
  };

  const handleFormSubmit = (formValues) => {
    if (selectedTodo) {
      setTodoList((currentList) => {
        const newList = [...currentList];

        const newTodoIdx = newList.findIndex((x) => x.id === selectedTodo.id);

        if (newTodoIdx < 0) return currentList;

        newList[newTodoIdx] = {
          ...newList[newTodoIdx],
          ...formValues,
        };

        return newList;
      });
      setSelectedTodo(null);

      return;
    }

    //ADD
    setTodoList((currentList) => {
      const newTodo = {
        id: new Date().getTime().toString(),
        ...formValues,
      };

      return [...currentList, newTodo];
    });
  };

  const filteredTodos =
    filters.completed === 'all'
      ? todoList
      : todoList.filter((x) => x.completed === filters.completed);

  return (
    <Container fixed>
      {/* {!hidden && <TodoForm onSubmit={handleFormSubmit} initialValues={selectedTodo} />} */}
      <Box mt={3} mb={5}>
        <TodoForm onSubmit={handleFormSubmit} initialValues={selectedTodo} />
      </Box>

      <Box textAlign="center">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            variant={filters.completed === 'all' ? 'contained' : 'outlined'}
            onClick={() => setFilters({ completed: 'all' })}
          >
            All
          </Button>
          <Button
            variant={filters.completed === true ? 'contained' : 'outlined'}
            onClick={() => setFilters({ completed: true })}
          >
            Completed
          </Button>
          <Button
            variant={filters.completed === false ? 'contained' : 'outlined'}
            onClick={() => setFilters({ completed: false })}
          >
            Not Completed
          </Button>
        </ButtonGroup>
      </Box>

      <TodoList todoList={filteredTodos} onRemove={handleRemoveItem} onEdit={handleEditClick} />
    </Container>
  );
}

export default TodoFeature;
