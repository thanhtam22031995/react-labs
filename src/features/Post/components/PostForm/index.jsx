import React from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import InputField from 'components/FormFields/InputField';
import { Button } from '@material-ui/core';

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function PostForm({ onSubmit }) {
  const schema = yup.object().shape({
    title: yup.string().required('Title required to type'),
    author: yup.string().required('Author required to type'),
    description: yup.string().required('Description required to type'),
  });

  const form = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      author: '',
      description: '',
      imageUrl: 'https://picsum.photos/id/401/1368/400',
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);

      form.reset();
    }
  };
  return (
    <form noValidate autoComplete="off" onSubmit={form.handleSubmit(handleFormSubmit)}>
      <InputField name="title" label="Title" form={form} />
      <InputField name="author" label="Author" form={form} />
      <InputField name="description" label="Description" form={form} />
      <InputField name="imageUrl" label="ImageUrl" form={form} />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default PostForm;
