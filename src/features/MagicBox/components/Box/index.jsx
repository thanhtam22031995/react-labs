import './Box.scss';
import PropTypes from 'prop-types';

const sizeMap = {
  small: '100px',
  medium: '150px',
  large: '200px',
};
function Box({ box, onClick }) {
  const { color = 'black', luckyNumber, size = 'medium' } = box;
  const height = sizeMap[size];

  const handleRemoveClick = () => {
    if (onClick) onClick(box);
  };
  return (
    <div className="box" style={{ backgroundColor: color, height }}>
      {luckyNumber}
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
}

Box.propTypes = {
  box: PropTypes.object,
  onClick: PropTypes.func,
};
Box.defaultProps = {
  box: {},
  onClick: null,
};

export default Box;
