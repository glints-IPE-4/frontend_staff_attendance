import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = props => {
  const { name, to, icon } = props;

  return (
    <Link to={to}>
      <div>
        <img src={icon} alt='icon' />
      </div>
      <span>{name}</span>
    </Link>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default MenuItem;
