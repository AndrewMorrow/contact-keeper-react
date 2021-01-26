import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FaIdCardAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = ({ title }) => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);
    const { isAuthenticated, logout, user } = authContext;
    const { clearContacts } = contactContext;

    const onLogout = () => {
        logout();
        clearContacts();
    };

    const authLinks = (
        <>
            <li> Welcome back {user && user.name}</li>
            <li>
                <a href="#!" onClick={onLogout}>
                    <FaSignOutAlt /> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </>
    );
    return (
        <div className="navbar bg-primary">
            <h1>
                <FaIdCardAlt /> {title}
            </h1>
            <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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
