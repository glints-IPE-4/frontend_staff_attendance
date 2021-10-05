import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../providers/auth/context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        auth && (auth.token === '' || auth.email === '' || auth.nip === '' || auth.role === '') ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
export default PrivateRoute;
