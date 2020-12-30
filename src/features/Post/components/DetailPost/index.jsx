import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyle = makeStyles({
  card: {
    backgroundColor: 'white',
  },
});

function DetailPost({ post }) {
  const classes = useStyle();
  return (
    <div>
      <div
        className="banner"
        style={{ height: 300, backgroundImage: `url(${post.imageUrl})` }}
      ></div>
      <Container className={classes.card}>
        <Typography variant="h3">{post.title}</Typography>
        <Typography variant="subtitle1">By: {post.author}</Typography>
        <Typography variant="body1">{post.description}</Typography>
      </Container>
    </div>
  );
}

export default DetailPost;
