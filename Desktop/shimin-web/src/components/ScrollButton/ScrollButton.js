import React, {useState} from 'react';
import PropTypes from 'prop-types';

import upArrow from '../../assets/up-arrow.svg';
import './ScrollButton.scss';

const ScrollButton = ({image}) =>{

    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <div>
        <img onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className="scrollButton" src={image} alt=''/>
      </div>
    );
  }

ScrollButton.propTypes = {
    /** Image item */
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),
}

ScrollButton.defaultProps = {
    image: upArrow,
};

export default ScrollButton
