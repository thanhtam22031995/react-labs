import './Box.scss';
import PropTypes from 'prop-types';

function Box(props) {
  const { color, luckyNumber } = props;

  return (
    <div className="box" style={{ backgroundColor: color }}>
      {luckyNumber}
    </div>
  );
}

Box.propTypes = {
  color: PropTypes.string,
  luckyNumber: PropTypes.number.isRequired,
};
Box.defaultProps = {
  color: 'black',
};

export default Box;
