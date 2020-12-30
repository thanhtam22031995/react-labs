import { Button, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};

const useStyle = makeStyles({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  btn: {
    margin: 10,
  },
  pageBox: {
    width: 40,
    height: 40,
    border: '1px solid black',
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 25,
  },
});
function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  const classes = useStyle();
  const handlePageChange = (newPage) => {
    if (onPageChange) onPageChange(newPage);
  };
  return (
    <div className={classes.root}>
      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        disabled={_page <= 1}
        onClick={() => handlePageChange(_page - 1)}
      >
        Prev
      </Button>
      <Typography className={classes.pageBox}>{_page}</Typography>
      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
