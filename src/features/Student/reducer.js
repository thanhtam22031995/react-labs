const initialState = {
  list: [],
  error: '',
  loading: false,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'student/getStudentListStart': {
      return { ...state, loading: true, error: '' };
    }
    case 'student/getStudentListSuccess': {
      const { data } = action.payload;
      return { ...state, loading: false, list: data };
    }
    case 'student/getStudentListFailed': {
      return { ...state, loadding: false, error: action.payload };
    }

    default:
      return state;
  }
};

export default studentReducer;
