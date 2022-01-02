import React from 'react';
import PropTypes from 'prop-types';

import drawing from '../../assets/drawing.svg';
import island from '../../assets/island.svg';
import snacks from '../../assets/snacks.svg';
import mickey from '../../assets/mickey.svg';
import meme from '../../assets/meme.jpg';

/** For description about my personality */
// import responsible from '../../assets/responsible.svg';
// import meticulous from '../../assets/meticulous.svg';
// import kempt from '../../assets/kempt.svg';
// import thoughtful from '../../assets/thoughtful.svg';
// import fungi from '../../assets/fungi.svg';

import { Quote, FlipBox, IconList } from '../../components'
import './AboutMe.scss';

const AboutMe = ({ subtitles, image }) => {
    return (
        <div className="aboutMe">
            <div className="aboutMe__header">About Me</div>
            <Quote 
                description='Diligent computing student from Nanyang Technological University with proven research and communication skills. Interned at New Wealth where the team and I developed high quality financial software solutions following React.js workflow and best practices. Friends describe me as meticulous and considerate. Cai png auntie describes me as beautiful. You can describe me as your next employee.'    
            />
            <div className="aboutMe__description">
                <FlipBox
                    isImage
                    borderColor='#EFA48B'
                    backgroundColor='#F2CDBD'
                    color='#895835'
                    bgMainFrame='#FCBCB8'
                    bgMainFrameShadow='#CC9693'
                    bgInlineFrame='#F09595'
                    colorInlineFrame='#524636'
                    bgInlineFrameShadow='#B87272'
                    bgHandle='#D49390'
                    fontSizeBottomFrame='15px'
                    title1="PEEKABOO!"
                    title2='Click and Hold!'
                    />
                <FlipBox
                        borderColor='#C7CFC0'
                        backgroundColor='#F5F3B0'
                        color='#895835'
                        bgMainFrame='#C9DBBA'
                        bgMainFrameShadow='#86947B'
                        bgInlineFrame='#AECF95'
                        colorInlineFrame='#524636'
                        bgInlineFrameShadow='#748C62'
                        bgHandle='#99A88C'
                        fontSizeBottomFrame='15px'
                        description={<ul>
                                        <IconList
                                            description='Cleaning'
                                        />
                                        <IconList
                                            image={drawing}
                                            description='Creative Arts'
                                        />
                                        <IconList
                                            image={island}
                                            description='Customising Island Layouts in Game'
                                        />
                                        <IconList
                                            image={snacks}
                                            description='Snacking'
                                        />
                                        <IconList
                                            image={mickey}
                                            description='Cute Collectibles Collection'
                                        />
                                    </ul>}
                        title1='My Hobbies'
                        title2='Click and Hold!'
                />
                <FlipBox
                    isImage
                    borderColor='#C1E3E8'
                    backgroundColor='#C0E6DE'
                    color='#895835'
                    bgMainFrame='#B7D2E8'
                    bgMainFrameShadow='#7B9AB5'
                    bgInlineFrame='#6DB1E8'
                    colorInlineFrame='#524636'
                    bgInlineFrameShadow='#5683A8'
                    bgHandle='#6B90bB'
                    fontSizeBottomFrame='30px'
                    image={meme}
                    title1=''
                    title2='Meme of the month'
                    /** For description about my personality */
                    // description={<ul>
                    //                 <IconList
                    //                     image={responsible}
                    //                     description='Responsible'
                    //                 />
                    //                 <IconList
                    //                     image={meticulous}
                    //                     description='Meticulous'
                    //                 />
                    //                 <IconList
                    //                     image={kempt}
                    //                     description='Kempt'
                    //                 />
                    //                 <IconList
                    //                     image={thoughtful}
                    //                     description='Thoughtful'
                    //                 />
                    //                 <IconList
                    //                     image={fungi}
                    //                     description='Mushroom'
                    //                 />
                    //             </ul>}
                />
            </div>
        </div>
    )
}

AboutMe.propTypes = {
    /** Word item */
    subtitles: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Image item */
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),
}

AboutMe.defaultProps = {
    subtitles: 'Welcome to my website!',
};

export default AboutMe
