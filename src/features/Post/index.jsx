import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddItem from './pages/Add';
import PostDetail from './pages/Detail';
import EditItem from './pages/Edit';
import PostList from './pages/List';

function PostsFeature() {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={match.path} component={PostList}></Route>
        <Route exact path={`${match.path}/add`} component={AddItem}></Route>
        <Route exact path={`${match.path}/:postId`} component={PostDetail}></Route>
        <Route path={`${match.path}/:postId/edit`} component={EditItem}></Route>
      </Switch>
    </div>
  );
}

export default PostsFeature;
