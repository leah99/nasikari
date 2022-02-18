import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

// import arrow from '../../assets/arrow-right.svg';
import './Button.scss';

const Button = ({ isFill, isOutline, isImage, isDisabled, backgroundColor, color, outlineColor, link, text, image }) => {

    const classes = classNames({
        "button": true,
        "button--fill": isFill,
        "button--outline": isOutline,
        "button--image": isImage,
        "button--disabled": isDisabled,
    });
    
    return (
        <div className={classes}>
            {isFill ?
                <div style={{ backgroundColor: backgroundColor}}>
                    <a href={link} style={{ backgroundColor: backgroundColor, color: color}}>{text}</a>
                </div> :
                <a href={link} style={{ borderColor: outlineColor, color: outlineColor}}>
                    {text}
                    {/* {isImage ? <img src={image} alt=''/> : ''} */}
                    {isImage ? <span /> : ''}
                </a>
            }
        </div>
    )
}

Button.propTypes = {
    /** URL */
    link: PropTypes.string,

    /** Text on the button */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Image */
    // image: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Background color of button */
    backgroundColor: PropTypes.string,

    /** Text color of button */
    color: PropTypes.string,

    /** Text color and border color of button--outline */
    outlineColor: PropTypes.string,

    /** Flag for button with coloured background */
    isFill: PropTypes.bool,

    /** Flag for button with outline style and transparent background */
    isOutline: PropTypes.bool,

    /** Flag for button with image; NOTE: isImage only applies to isOutline */
    isImage: PropTypes.bool,

    /** Flag for disabling button */
    isDisabled: PropTypes.bool,
}

Button.defaultProps = {
    link: "mailto:shimin.loww@gmail.com",
    backgroundColor: "#9D9989",
    color: "#EAEEDE",
    outlineColor: "#383F3B",
    text: "Contact Me",
    // image: arrow,
    isFill: false,
    isOutline: false,
    isImage: false,
    isDisabled: false,
};

export default Button