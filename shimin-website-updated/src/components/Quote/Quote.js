import React from 'react';
import PropTypes from 'prop-types';

import openQuotation from '../../assets/open-quotation.svg';
import closeQuotation from '../../assets/close-quotation.svg';
import './Quote.scss';

const Quote = ({ openQuotation, description, closeQuotation }) => {
    return (
        <div className="quote">
            <img className="quote__openQuotation" src={openQuotation} alt=''/>
            <p className="quote__description">{description}</p>
            <img className="quote__closeQuotation" src={closeQuotation} alt=''/>
        </div>
    )
}

Quote.propTypes = {
    /** Open Quotation mark */
    openQuotation: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Word item */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Close Quotation mark */
    closeQuotation: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),
}

Quote.defaultProps = {
    openQuotation: openQuotation,
    description: 'One day I will make the onions cry.',
    closeQuotation: closeQuotation
};

export default Quote