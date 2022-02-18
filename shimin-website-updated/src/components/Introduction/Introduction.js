import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../components'
import driedLeaves from '../../assets/dried-leaves.jpg';
import tulipsDrapery from '../../assets/tulips-and-drape.jpg';
import './Introduction.scss';

const Introduction = ({ imageLeft, imageRight, title, subtitles1, subtitles2, subtitles3 }) => {
    return (
        <div className="introduction">
            <div className="introduction__container-left">
                <img className="introduction__container-left__image-left" src={imageLeft} alt=''/>
                <img className="introduction__container-left__image-right" src={imageRight} alt=''/>
            </div>
            <div className="introduction__container-right">
                <h2>{title}</h2>
                <p>{subtitles1}</p>
                <p>{subtitles2}</p>
                <p>{subtitles3}</p>
                <span><Button isFill /></span>
            </div>
        </div>
    )
}

Introduction.propTypes = {
    /** Image item -- on the left*/
    imageLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Image item -- on the right */
    imageRight: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Title */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    
    /** Text under title -- subtitles */
    subtitles1: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Text under title -- subtitles */
    subtitles2: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Text under title -- subtitles */
    subtitles3: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

Introduction.defaultProps = {
    imageLeft: driedLeaves,
    imageRight: tulipsDrapery,
    title: "Happy 2022",
    subtitles1: "Not wishing.",
    subtitles2: "Not hoping.",
    subtitles3: "This year I will make it happen.",
};

export default Introduction