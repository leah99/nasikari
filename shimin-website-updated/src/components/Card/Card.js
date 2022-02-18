import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../components'
import weedLeave from '../../assets/weed-light.png';
import lemonLeave from '../../assets/lemon-leave.jpg';
import './Card.scss';

const Card = ({ icon, image, text, isButtonDisabled, buttonMessage, link }) => {
    return (
        <div className="card">
            <div className="card__header"><img className="card__header__icon" src={icon} alt=''/></div>
            <img className="card__image" src={image} alt=''/>
            <p>{text}</p>
            <Button isOutline isImage
                isDisabled={isButtonDisabled}
                text={buttonMessage}
                link={link}
            />
        </div>
    )
}

Card.propTypes = {
    /** Icon image */
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Image -- Content */
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Description */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Flag for disabling button */
    isButtonDisabled: PropTypes.bool,

    /** Message on button */
    buttonMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** URL */
    link: PropTypes.string,
}

Card.defaultProps = {
    icon: weedLeave,
    image: lemonLeave,
    text: "Shi Min's Website",
    isButtonDisabled: false,
    buttonMessage: "Visit",
    link: "https://leah99.github.io/shimin-website/",
};

export default Card
