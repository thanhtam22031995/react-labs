import { Container } from '@material-ui/core';
import postApi from 'api/postApi';
import PostForm from 'features/Post/components/PostForm';
import React, { useEffect, useState } from 'react';

AddItem.propTypes = {};

function AddItem() {
  const [formValue, setFormValue] = useState('');
  const handleFormSubmit = (values) => {
    setFormValue(values);
  };

  useEffect(() => {
    (async () => {
      if (formValue) {
        await postApi.add(formValue);
      }
    })();
  }, [formValue]);

  return (
    <Container fixed>
      <PostForm onSubmit={handleFormSubmit} />
    </Container>
  );
}

export default AddItem;
