/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
    // eslint-disable-next-line react/prop-types
    const { name, to, icon } = props;

    return (
        <Link to={to}>
            <div><img src={icon} /></div>
            <span>{name}</span>
        </Link>
    );
};

export default MenuItem;