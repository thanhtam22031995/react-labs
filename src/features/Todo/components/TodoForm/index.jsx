import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@material-ui/core';
import CheckboxField from 'components/FormFields/CheckboxField';
import InputField from 'components/FormFields/InputField';
import TextEreaField from 'components/FormFields/TextEreaField';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
};
TodoForm.defaultProps = {
  initialValues: {
    value: '',
    description: '',
    completed: false,
  },
};

function TodoForm({ onSubmit, initialValues }) {
  const schema = yup.object().shape({
    value: yup
      .string()
      .required('Please enter what to do')
      .min(5, 'Todo is required longer 5 letters')
      .test('should hava at least two words', 'Please enter at least two world', (value) => {
        return value.split(' ').filter((x) => !!x).length >= 2;
      }),
    // .email('Please enter a valid email address'),
    // value: yup.string().matches(/ /, { excludeEmptyString: true }),
    description: yup.string().when('value', {
      is: (value) => value.toLowerCase() === 'reactjs',
      then: yup.string().required('Please enter description'),
      otherwise: yup.string(),
    }),

    completed: yup.boolean(),
    // noi dinh nghia tat ca form validation
  });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: initialValues || { value: '', description: '', completed: false },
    // defaultValues: {
    //   value: '',
    //   // ko dc dung undefined o day. co the dung null
    // },
    resolver: yupResolver(schema),
  });
  const { setValue } = form;

  // set form value whenerver initialValues changes
  useEffect(() => {
    setValue('value', initialValues ? initialValues.value : '');
    setValue('description', initialValues?.description || '');
    setValue('completed', initialValues?.completed || false);
  }, [initialValues, setValue]);

  const handleFormSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);

      form.reset();
    }
  };
  return (
    <form noValidate autoComplete="off" onSubmit={form.handleSubmit(handleFormSubmit)}>
      <Typography component="h2" variant="h5">
        Todo Form
      </Typography>

      <InputField form={form} name="value" label="Your next thing to do?" />
      <TextEreaField form={form} name="description" label="More details about it!" />
      <CheckboxField form={form} name="completed" label="I've completed this task" />

      <Button variant="contained" color="primary" type="submit">
        Sumbit
      </Button>
    </form>
  );
}

export default TodoForm;
