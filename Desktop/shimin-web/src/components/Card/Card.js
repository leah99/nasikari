import React from 'react';
import PropTypes from 'prop-types';

import mickey from '../../assets/mickey.svg';
import './Card.scss';

const Card = ({ backgroundColor, image, title }) => {
    return (
        <div className="card" style={{ backgroundColor: backgroundColor }}>
            <img className="card__image" src={image} alt=''/>
            <div className="card__title">{title}</div>
        </div>
    )
}

Card.propTypes = {
    /** Background color of card */
    backgroundColor: PropTypes.string,

    /** Image item */
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Word item */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

Card.defaultProps = {
    backgroundColor: '#F5CAC3',
    image: mickey,
    title: 'Open Minded',
};

export default Card
