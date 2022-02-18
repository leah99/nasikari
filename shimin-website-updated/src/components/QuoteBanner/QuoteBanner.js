import React from 'react';
import PropTypes from 'prop-types';

import { Quote } from '../../components'
import duckLeaves from '../../assets/duck-leaves-brown.png';
import fan from '../../assets/fan-editorial.jpg';
import pot from '../../assets/pots.jpg';
import './QuoteBanner.scss';

const QuoteBanner = ({ quote, image1, image2, image3 }) => {
    return (
        <div className="quote-banner">
            <div className="quote-banner__quote">
                <img className="quote-banner__quote__image-top" src={image1} alt=''/>
                <Quote
                    description={quote}
                />
                <img className="quote-banner__quote__image-bottom" src={image1} alt=''/>
            </div>
            <div className="quote-banner__container">
                <img className="quote-banner__container__image-top" src={image2} alt=''/>
                <img className="quote-banner__container__image-middle" src={image3} alt=''/>
                <span />
            </div>
        </div>
    )
}

QuoteBanner.propTypes = {
    /** Quote */
    quote: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Image item */
    image1: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Image item */
    image2: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Image item */
    image3: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),
}

QuoteBanner.defaultProps = {
    quote: "One day I will make the onions cry.",
    image1: duckLeaves,
    image2: fan,
    image3: pot,
};

export default QuoteBanner