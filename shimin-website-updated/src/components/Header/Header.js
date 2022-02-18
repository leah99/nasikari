import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-scroll";
import './Header.scss';

import logo from '../../assets/logo.png';

const Header = ({ title1, title2, image }) => {
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
                <li><img className="header__unordered-list__image" src={image} alt=''/></li>
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

    /** Image */
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),
}

Header.defaultProps = {
    title1: "",
    title2: "",
    image: logo,
};

export default Header