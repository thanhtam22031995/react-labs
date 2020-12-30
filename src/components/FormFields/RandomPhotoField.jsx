import { Box, Button, FormLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

RandomPhotoField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

RandomPhotoField.defaultProps = {
  label: '',
  disabled: false,
};

function RandomPhotoField(props) {
  const { name, label, form, disabled } = props;
  const { errors } = form;
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  const handleRandomClick = (onChange) => {
    const randomNumber = Math.trunc(Math.random() * 1000);
    const url = `https://picsum.photos/id/${randomNumber}/400/200`;
    onChange(url);
  };
  const handleRandomClickV2 = () => {
    const randomNumber = Math.trunc(Math.random() * 1000);
    const url = `https://picsum.photos/id/${randomNumber}/400/200`;
    form.setValue(name, url, { shouldValidate: true });
  };

  return (
    <Box mt={1} mb={2}>
      <FormLabel>{label}</FormLabel>

      <Controller
        name={name}
        control={form.control}
        render={({ value, onChange }) => (
          <Box>
            <Box
              component="img"
              src={value || 'https://via.placeholder.com/400x200.png'}
              onError={() => handleRandomClick(onChange)}
            ></Box>
            <Button
              type="button"
              variant="contained"
              color="primary"
              disabled={disabled}
              onClick={handleRandomClickV2}
            >
              Random Photo
            </Button>
          </Box>
        )}
      />
    </Box>
  );
}

export default RandomPhotoField;
