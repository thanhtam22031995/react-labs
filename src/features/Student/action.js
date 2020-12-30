import studentApi from 'api/studentApi';

const getStudentListStart = (error) => ({
  type: 'student/getStudentListStart',
});

const getStudentListSuccess = (data) => ({
  type: 'student/getStudentListSuccess',
  payload: data,
});

const getStudentListFailed = (error) => ({
  type: 'student/getStudentListFailed',
  payload: error,
});

// Async action - redux thunk - async action creator
export const getStudentList = (params) => {
  return async (dispatch) => {
    try {
      dispatch(getStudentListStart());

      const response = await studentApi.getAll(params);
      const action = getStudentListSuccess(response);
      dispatch(action);
    } catch (error) {
      const action = getStudentListFailed(error);
      dispatch(action);

      throw error;
    }
  };
};
