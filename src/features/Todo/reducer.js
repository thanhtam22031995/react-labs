const getInitialTodoList = () => {
  try {
    return JSON.parse(localStorage.getItem('todo_list')) || [];
  } catch (error) {}
};

const initialState = {
  list: getInitialTodoList(),
  filters: { completed: 'all' },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todo/add': {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }

    case 'todo/remove': {
      return {
        ...state,
        list: state.list.filter((x) => x.id !== action.payload),
      };
    }

    case 'todo/update': {
      const todo = action.payload;
      const newList = [...state.list];

      const updateIdx = newList.findIndex((x) => x.id === todo.id);
      if (updateIdx < 0) return state;

      newList[updateIdx] = {
        ...newList[updateIdx],
        ...todo,
      };

      return {
        ...state,
        list: newList,
      };
    }
    case 'todo/setFilters': {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    }

    default:
      return state;
  }
};
export default todoReducer;
