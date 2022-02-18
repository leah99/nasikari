import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import './Doughnut.scss';

const Doughnut = ({ isPink, isYellow, isGreen, isBlue, percentage, description }) => {

    const classes = classNames({
        "doughnut-container__doughnut": true,
        "doughnut-container__doughnut--pink": isPink,
        "doughnut-container__doughnut--yellow": isYellow,
        "doughnut-container__doughnut--green": isGreen,
        "doughnut-container__doughnut--blue": isBlue,
    });
    
    return (
        <div className="doughnut-container" >
            <div className={classes}><h4>{percentage}</h4></div>
            <p>{description}</p>
        </div>
    )
}

Doughnut.propTypes = {
    /** Text in the middle of the doughnut */
    percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Text below the doughnut */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Flag for pink doughnut */
    isPink: PropTypes.bool,

    /** Flag for pink doughnut */
    isYellow: PropTypes.bool,

    /** Flag for pink doughnut */
    isGreen: PropTypes.bool,

    /** Flag for pink doughnut */
    isBlue: PropTypes.bool,
}

Doughnut.defaultProps = {
    percentage: "96%",
    description: "Studious",
    isPink: false,
    isYellow: false,
    isGreen: false,
    isBlue: false,
};

export default Doughnut