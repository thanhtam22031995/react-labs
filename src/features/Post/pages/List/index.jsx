import { Grid, LinearProgress } from '@material-ui/core';
import Pagination from '../../components/Pagination';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import postApi from '../../../../api/postApi';
import MediaCard from '../../components/Card';

PostList.propTypes = {};

function PostList() {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 9,
    _totalRows: 11,
  });
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 9,
    _sort: 'updatedAt',
    _order: 'desc',
  });
  const handlePageChange = (newPage) => {
    setFilter({
      ...filter,
      _page: newPage,
    });
  };

  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await postApi.getAll(filter);

        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list', error);
      }
      setLoading(false);
    })();
  }, [filter]);

  const handleCardClick = (post) => {
    history.push(`/posts/${post.id}`);
  };
  const handleRemove = async (post) => {
    await postApi.remove(post.id);
    setFilter({ ...filter });
  };
  const handleEditMove = (post) => {
    history.push(`/posts/${post.id}/edit`);
  };
  return (
    <div>
      {loading && <LinearProgress />}
      <Grid container>
        {postList.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id} style={{ padding: 15 }}>
            <MediaCard
              onClick={(post) => handleCardClick(post)}
              post={post}
              onRemove={handleRemove}
              onEdit={handleEditMove}
            />
          </Grid>
        ))}
      </Grid>
      {!loading && <Pagination pagination={pagination} onPageChange={handlePageChange} />}
    </div>
  );
}

export default PostList;
