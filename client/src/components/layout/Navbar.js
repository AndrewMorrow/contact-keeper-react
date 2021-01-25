import React from "react";
import PropTypes from "prop-types";
import { FaIdCardAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <FaIdCardAlt /> {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: "Contact Keeper",
    icon: <FaIdCardAlt />,
};

export default Navbar;
