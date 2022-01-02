import React from 'react';
import PropTypes from 'prop-types';

import openQuotation from '../../assets/open-quotation-mark.svg';
import closeQuotation from '../../assets/close-quotation-mark.svg';
import './Quote.scss';

const Quote = ({ openQuotation, description, closeQuotation }) => {
    return (
        <div className="quote">
            <img className="quote__openQuotation" src={openQuotation} alt=''/>
            <div className="quote__description">{description}</div>
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
    description: '...',
    closeQuotation: closeQuotation
};

export default Quote
