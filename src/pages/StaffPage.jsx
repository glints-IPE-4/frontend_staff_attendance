import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import AddStaff from '../components/AddStaff';

const StaffPage = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <Link to={`${url}/AddStaff`}>
        <button type='submit'>Add User</button>
      </Link>
      <Switch>
        <Route path={`${path}/:AddStaff`}>
          <AddStaff />
        </Route>
      </Switch>
    </div>
  );
};

export default StaffPage;
