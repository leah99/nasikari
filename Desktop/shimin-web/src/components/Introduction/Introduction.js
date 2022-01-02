import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Signature } from '../../assets/signature.svg';
import pets from '../../assets/pets.png';
import './Introduction.scss';

const Introduction = ({ subtitles, image }) => {
    return (
        <div className="introduction">
            <div className="introduction__item-container">
                <div className="introduction__item-container__svg"><Signature /></div>
                <h2 className="introduction__item-container__subwords">{subtitles}</h2>
                <a href="mailto:shimin.loww@gmail.com">Say Hi</a>
            </div>
            <img className="introduction__image" src={image} alt=''/>
        </div>
    )
}

Introduction.propTypes = {
    /** Word item */
    subtitles: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Image item */
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),
}

Introduction.defaultProps = {
    subtitles: 'Welcome to my website!',
    image: pets,
};

export default Introduction
