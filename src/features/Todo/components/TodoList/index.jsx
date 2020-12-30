import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onRemove: null,
  onEdit: null,
};

const useStyle = makeStyles((theme) => ({
  root: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    margin: '1rem 0',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function TodoList({ todoList, onRemove, onEdit }) {
  const classes = useStyle();

  return (
    <ul className={classes.root}>
      {todoList.map((todo) => (
        <li className={classes.item} key={todo.id}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box flex="1 1 auto">
                  <Typography
                    component="p"
                    variant="body1"
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  >
                    {todo.value}
                  </Typography>

                  {todo.description && (
                    <Typography component="p" variant="body2">
                      {todo.description}
                    </Typography>
                  )}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                  onClick={() => onEdit && onEdit(todo)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={() => onRemove && onRemove(todo)}
                >
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
