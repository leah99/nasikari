import React from 'react';
import PropTypes from 'prop-types';

import './Banner.scss';

const Banner = ({ textLeft, textRight }) => {
    return (
        <div className="banner">
            <div className="banner__container-left">
                <h1>1</h1>
                <p>{textLeft}</p>
            </div>
            <div className="banner__container-right">
                <h1>2</h1>
                <p>{textRight}</p>
            </div>
        </div>
    )
}

Banner.propTypes = {
    /** First text item -- on the left */
    textLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Second text item -- on the right*/
    textRight: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

Banner.defaultProps = {
    textLeft: "Fun fact: Bees sometimes sting other bees",
    textRight: "Fun fact: Pringles aren't actually potato chips."
};

export default Banner