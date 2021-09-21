import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import New from '../components/New';

const StaffPage = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <Link to={`${url}/New`}>
        <button type='submit'>Add User</button>
      </Link>
      <Switch>
        <Route path={`${path}/:New`}>
          <New />
        </Route>
      </Switch>
    </div>
  );
};

export default StaffPage;
