import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import postApi from '../../../../api/postApi';
import DetailPost from '../../components/DetailPost';

function PostDetail() {
  const { params } = useRouteMatch();

  const [post, setPost] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const data = await postApi.getById(params.postId);

        setPost(data);
      } catch (error) {
        console.log('Failed to fetch post list', error);
      }
    })();
  }, [params.postId]);

  return (
    <div>
      <DetailPost post={post} />
    </div>
  );
}

export default PostDetail;
