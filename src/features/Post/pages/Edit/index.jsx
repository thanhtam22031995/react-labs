import { Container } from '@material-ui/core';
import postApi from 'api/postApi';
import PostForm from 'features/Post/components/PostForm';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

EditItem.propTypes = {};

function EditItem() {
  const [post, setPost] = useState({
    title: '',
    description: '',
    imageUrl: '',
    author: '',
  });
  const { params } = useRouteMatch();

  useEffect(() => {
    (async () => {
      const data = await postApi.getById(params.postId);
      setPost(data);
    })();
  }, [params.postId]);

  const handleFormSubmit = () => {};
  return (
    <Container fixed>
      <PostForm onSubmit={handleFormSubmit} post={post} />
    </Container>
  );
}

export default EditItem;
