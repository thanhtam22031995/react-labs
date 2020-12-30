import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

SelectField.defaultProps = {
  label: '',
  disabled: false,
};

function SelectField(props) {
  const { name, label, form, disabled, options } = props;
  const { errors } = form;
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    <Box mt={1} mb={2}>
      <FormControl error={hasError} component="fieldset">
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ value, onChange, onBlur }) => (
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label={label}
              disabled={disabled}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errorMessage}</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default SelectField;
