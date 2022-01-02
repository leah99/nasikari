import React from 'react';
import PropTypes from 'prop-types';

import copyright from '../../assets/copyright.svg';
import './Footer.scss';

const Footer = ({ image, description }) => {
    return (
        <div className="footer">
            <img className="footer__copyright" src={image} alt=''/>
            <span className="footer__description">{description}</span>
        </div>
    )
}

Footer.propTypes = {
    /** Copyright image */
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),
    
    /** Description */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

Footer.defaultProps = {
    image: copyright,
    description: '2021-2022 Low Shi Min',
};

export default Footer
