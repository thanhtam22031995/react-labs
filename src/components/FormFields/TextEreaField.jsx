import { Box, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

TextEreaField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

TextEreaField.defaultProps = {
  label: '',
  disabled: false,
};

function TextEreaField(props) {
  const { name, label, form, disabled } = props;
  const { errors } = form;
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    <Box mt={1} mb={2}>
      <Controller
        name={name}
        control={form.control}
        render={({ value, onChange, onBlur }) => (
          <TextField
            fullWidth
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            error={hasError}
            helperText={errorMessage}
            id="outlined-multiline-static"
            label={label}
            multiline
            rows={3}
            variant="outlined"
          />
        )}
      />
    </Box>
  );
}

export default TextEreaField;
