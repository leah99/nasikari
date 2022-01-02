import React from 'react';
import PropTypes from 'prop-types';

import broom from '../../assets/cleaning.svg';
import './IconList.scss';

const IconList = ({ image, description }) => {
    return (
        <div className="iconList">
            <li>
                <img className="iconList__image" src={image} alt=''/>
                <span className="iconList__description">{description}</span>
            </li>
        </div>
    )
}

IconList.propTypes = {
    /** Image item */
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),
    
    /** Description */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

IconList.defaultProps = {
    image: broom,
    description: 'Hello',
};

export default IconList
