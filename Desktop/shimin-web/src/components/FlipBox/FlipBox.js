import React from 'react';
import PropTypes from 'prop-types';

import doggos from '../../assets/doggos.png';
import './FlipBox.scss';

const FlipBox = ({ borderColor, backgroundColor, color, isImage, image, description, bgMainFrame, bgMainFrameShadow, bgInlineFrame, colorInlineFrame, bgInlineFrameShadow, fontSizeBottomFrame, bgHandle, title1, title2 }) => {
    return (
        <div className="container">
            <div className="container__flipbox" style={{ border: '5px solid', borderColor, backgroundColor: backgroundColor, color: color }}>
                {isImage ? <img className="container__flipbox__image" src={image} alt=''/> : description}
                <div className="container__flipbox--active">
                    <div className="container__flipbox--active__mainDoor" style={{ backgroundColor: bgMainFrame }}>
                        <div className="container__flipbox--active__mainDoor__top">
                            <div className="container__flipbox--active__mainDoor__top__div" style={{ backgroundColor: bgInlineFrame, color: colorInlineFrame }}>
                                {title1}
                            </div>
                            <div className="container__flipbox--active__mainDoor__top__shadow" style={{ backgroundColor: bgInlineFrameShadow }} />
                        </div>
                        <div className="container__flipbox--active__mainDoor__handle">
                            <div className="container__flipbox--active__mainDoor__handle__handle" style={{ backgroundColor: bgHandle }} />
                            <div className="container__flipbox--active__mainDoor__handle__knob" style={{ backgroundColor: bgHandle }} />
                        </div>
                        <div className="container__flipbox--active__mainDoor__bottom">
                            <div className="container__flipbox--active__mainDoor__bottom__div" style={{ backgroundColor: bgInlineFrame, color: colorInlineFrame, fontSize: fontSizeBottomFrame }}>
                                {title2}
                            </div>
                            <div className="container__flipbox--active__mainDoor__bottom__shadow" style={{ backgroundColor: bgInlineFrameShadow }} />
                        </div>
                    </div>
                    <div className="container__flipbox--active__mainDoorShadow" style={{ backgroundColor: bgMainFrameShadow }} />
                </div>
            </div>
        </div>
    )
}

FlipBox.propTypes = {

    /** Border color of box */
    borderColor: PropTypes.string,

    /** Background color of box */
    backgroundColor: PropTypes.string,

    /** Color of text */
    color: PropTypes.string,

    /** Background color of Door */
    bgMainFrame: PropTypes.string,

    /** Background color of Door shadow */
    bgMainFrameShadow: PropTypes.string,

    /** Background color of Inline Door Frame */
    bgInlineFrame: PropTypes.string,

    /** Color of text */
    colorInlineFrame: PropTypes.string,

    /** Background color of Inline Door Frame shadow */
    bgInlineFrameShadow: PropTypes.string,
    
    /** Font Size of bottom inline frame */
    fontSizeBottomFrame: PropTypes.string,

    /** Background color of Door Handle */
    bgHandle: PropTypes.string,

    /** Boolean for if item is an Image */
    isImage: PropTypes.bool,

    /** Image item */
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),
    
    /** Description */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Top inline frame words */
    title1: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Bottom inline frame words */
    title2: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

FlipBox.defaultProps = {
    borderColor: '#C7CFC0',
    backgroundColor: '#F5F3B0',
    color: '#895835',
    bgMainFrame: '#C9DBBA',
    bgMainFrameShadow: '#86947B',
    bgInlineFrame: '#AECF95',
    colorInlineFrame: '#524636',
    bgInlineFrameShadow: '#748C62',
    bgHandle: '#99A88C',
    fontSizeBottomFrame: '15px',
    isImage: false,
    image: doggos,
    description: 'Hello',
    title1: 'Title',
    title2: 'Click and Hold!',
};

export default FlipBox
