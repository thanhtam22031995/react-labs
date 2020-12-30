import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

StudentList.propTypes = {
  data: PropTypes.array,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};
StudentList.defaultProps = {
  data: [],
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

const CITY_MAP = {
  td: 'Thủ Đức',
  hcm: 'TP Hồ Chí Minh',
  hn: 'Hà Nội',
  pt: 'Phan Thiết',
  dn: 'Đà Nẵng',
};

function StudentList({ data, onRemove, onEdit }) {
  const classes = useStyle();

  return (
    <ul className={classes.root}>
      {data.map((student) => (
        <li className={classes.item} key={student.id}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box flex="1 1 auto">
                  <Typography
                    component="p"
                    variant="body1"
                    style={{ textDecoration: student.completed ? 'line-through' : 'none' }}
                  >
                    {student.name}
                  </Typography>

                  <Typography component="p" variant="body2">
                    Gender: {student.gender}
                  </Typography>
                  <Typography component="p" variant="body2">
                    City: {CITY_MAP[student.city]}
                  </Typography>
                  <Typography component="p" variant="body2">
                    Age: {student.age}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                  onClick={() => onEdit && onEdit(student)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={() => onRemove && onRemove(student)}
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

export default StudentList;
