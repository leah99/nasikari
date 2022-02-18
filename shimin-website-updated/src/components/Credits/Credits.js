import React from 'react';
import PropTypes from 'prop-types';

import flowers from '../../assets/everlasting-bouquet.jpg';
import linkedInIcon from '../../assets/linkedIn.svg';
import emailIcon from '../../assets/email.svg';
import './Credits.scss';

const Credits = ({ image, title, subtitles, linkedInLink, linkedInIcon, emailAddress, emailIcon }) => {
    return (
        <div className="credits">
            <div className="credits__container-left">
                <div className="credits__container-left__block-left" />
                <div className="credits__container-left__block-middle" />
                <img className="credits__container-left__image" src={image} alt=''/>
            </div>
            <div className="credits__container-right">
                <h2>{title}</h2>
                <p>{subtitles}</p>
                <span className="credits__container-right__icon">
                    <a href={linkedInLink}><img className="credits__container-right__icon__linkedIn" src={linkedInIcon} alt=''/></a>
                    <a href={emailAddress}><img className="credits__container-right__icon__email" src={emailIcon} alt=''/></a>
                </span>
            </div>
        </div>
    )
}

Credits.propTypes = {
    /** Image item */
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Title */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    
    /** Text under title -- subtitles */
    subtitles: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Link to linkedIn */
    linkedInLink: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** LinkedIn icon */
    linkedInIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Link to email */
    emailAddress: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Email icon */
    emailIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),
}

Credits.defaultProps = {
    image: flowers,
    title: "Thank You",
    subtitles: "Do feel free to contact me if you want to offer me a job with work life balance",
    linkedInLink: "https://www.linkedin.com/in/shi-min-low-8a09591bb",
    linkedInIcon: linkedInIcon,
    emailAddress: "mailto:shimin.loww@gmail.com",
    emailIcon: emailIcon,
};

export default Credits