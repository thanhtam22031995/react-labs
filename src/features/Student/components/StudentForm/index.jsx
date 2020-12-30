import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@material-ui/core';
import InputField from 'components/FormFields/InputField';
import OptionField from 'components/FormFields/OptionField';
import RadioField from 'components/FormFields/RadioField';
import RandomPhotoField from 'components/FormFields/RandomPhotoField';
import SelectField from 'components/FormFields/SelectField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const CITI_MAP = [
  { value: 'hn', label: 'Ha Noi' },
  { value: 'dn', label: 'Da Nang' },
  { value: 'td', label: 'Thu Duc' },
  { value: 'hcm', label: 'TP Ho Chi Minh' },
  { value: 'pt', label: 'Phan Thiet' },
];
StudentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
};
StudentForm.defaultProps = {
  initialValues: null,
};

function StudentForm({ onSubmit, initialValues }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter student Name')
      .test('at least 2 word of characters', 'Name is too short.', (value) => {
        return value.split(' ').filter((x) => x.length >= 3).length >= 2;
      }),
    age: yup
      .number()
      .required('Please enter your age')
      .min(18, 'Should be greater than or equal to 18.')
      .when(['level', 'city'], {
        is: (level, city) => city === 'hcm' && level === 'mid dle',
        then: yup.number().min(25),
      })
      .when(['level', 'city'], {
        is: (level, city) => city === 'hcm' && level === 'senior',
        then: yup.number().min(30),
      }),
    gender: yup.string(),
    city: yup.string(),
    level: yup.string(),
  });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: initialValues || {
      name: '',
      age: '',
      gender: 'male',
      city: 'pt',
      level: 'junior',
      avatar: '',
    },

    resolver: yupResolver(schema),
  });

  // const avatarUrl = form.watch('avatar');
  // console.log(avatarUrl);

  const { isSubmitting } = form.formState;

  const handleFormSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={form.handleSubmit(handleFormSubmit)}>
      <Typography component="h3">Student Form</Typography>
      <InputField form={form} name="name" label="Student Name" />
      <InputField form={form} name="age" label="Student Age" type="number" />
      <RadioField
        form={form}
        name="gender"
        label="Gender"
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ]}
      />
      <OptionField
        form={form}
        name="level"
        label="Experience level"
        options={[
          { value: 'junior', label: 'Junior' },
          { value: 'middle', label: 'Middle' },
          { value: 'senior', label: 'Senior' },
        ]}
        onChange={() => form.trigger('age')}
      />

      <SelectField form={form} name="city" label="City" options={CITI_MAP} />

      <RandomPhotoField form={form} name="avatar" label="Avatar" />

      <Button disabled={isSubmitting} fullWidth variant="contained" color="primary" type="submit">
        Sumbit
      </Button>
    </form>
  );
}

export default StudentForm;
