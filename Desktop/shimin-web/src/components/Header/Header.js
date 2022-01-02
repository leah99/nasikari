import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-scroll";
import './Header.scss';

const Header = ({ title1, title2 }) => {
    return (
        <nav className="header">
            <ul className="header__unordered-list">
                <li>
                    <Link
                        activeClass="active"
                        to="aboutMe"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        {title1}
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="myProjects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        {title2}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

Header.propTypes = {
    /** Title of first item */
    title1: PropTypes.string,

    /** Title of second item */
    title2: PropTypes.string,
}

Header.defaultProps = {
    title1: '',
    title2: '',
};

export default Header
