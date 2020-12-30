import { Box, Button, Container, Dialog, DialogContent, LinearProgress } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import studentApi from 'api/studentApi';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThemeContext from 'themeContext';
import { getStudentList } from './action';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function StudentFeature(props) {
  const studentList1 = useSelector((state) => state.students.list);

  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    _sort: 'updatedAt',
    _order: 'desc',
  });

  useEffect(() => {
    try {
      (async () => {
        console.log('start');
        setLoading(true);
        const action = getStudentList(filters);
        await dispatch(action);
        setLoading(false);
        console.log('end');
      })();
    } catch (error) {
      console.log('failed to fecth student list', error);
    }
  }, [dispatch, filters]);

  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [open, setOpen] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const { currentTheme: theme } = useContext(ThemeContext);

  const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await studentApi.getAll(filters);

        setStudentList(data);
        setLoading(false);
      } catch (error) {
        // console.log('Failed to fetch student list', error);
      }
    })();
  }, [filters]);

  const handleEditClick = (student) => {
    setSelectedStudent({ city: '', gender: 'male', level: 'junior', avatar: '', ...student });
    setOpen(true);
  };

  const handleSubmit = async (values) => {
    const isAdd = !selectedStudent;

    if (isAdd) {
      await studentApi.add(values);
      setFilters((x) => ({ ...x }));

      setOpen(false);
      return;
    }

    // Edit mode
    try {
      setSubmitting(true);

      values.id = selectedStudent.id;
      const updateStudent = await studentApi.update(values);
      // nho check xem co bao nhieu gia tri thay doi, cai nao thay doi thi gui cai do len thoi

      // update student item
      setStudentList((currentList) => {
        const newList = [...currentList];

        const updateIdx = newList.findIndex((x) => x.id === selectedStudent.id);

        if (updateIdx < 0) return currentList;

        newList[updateIdx] = {
          ...newList[updateIdx],
          ...updateStudent,
        };

        return newList;
      });
      setSelectedStudent(null);

      // closing dialog
      setOpen(false);
    } catch (error) {
      console.log('Failed to update student', error);
    }

    setSubmitting(false);
  };

  const handleAddClick = () => setOpen(true);
  const handleRemoveClick = async (student) => {
    try {
      const message = `Do you want to remove student named: ${student.name}?`;
      if (window.confirm(message)) {
        await studentApi.remove(student.id);
        setFilters((x) => ({ ...x }));
      }
    } catch (error) {
      console.log('Failed to remove student');
    }
  };

  return (
    <div style={{ backgroundColor: theme.secondaryColor }}>
      <Box>
        {loading && <LinearProgress />}
        <Container fixed>
          <Box pt={2} display="flex" justifyContent="space-between">
            <h2 style={{ color: theme.primaryColor }}>Student Feature</h2>
            <Button
              onClick={handleAddClick}
              variant="contained"
              color="primary"
              startIcon={<Add />}
            >
              Add Student
            </Button>
          </Box>

          <StudentList data={studentList1} onEdit={handleEditClick} onRemove={handleRemoveClick} />

          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
            {submitting && <LinearProgress />}
            <DialogContent>
              <StudentForm initialValues={selectedStudent} onSubmit={handleSubmit} />
            </DialogContent>
          </Dialog>
        </Container>
      </Box>
    </div>
  );
}

export default StudentFeature;
