import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = props => {
  const { name, to, Icon, exact } = props;

  return (
    <NavLink to={to} exact={exact} activeClassName='selected'>
      <div>
        <Icon />
      </div>
      <span>{name}</span>
    </NavLink>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  exact: PropTypes.bool,
};
MenuItem.defaultProps = {
  exact: false,
};

export default MenuItem;
