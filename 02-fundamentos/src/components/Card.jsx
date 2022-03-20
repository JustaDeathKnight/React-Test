import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ lang, img, link, fcolor, scolor}) => {
  return (
    <div className='card' style={{
        background: `linear-gradient(45deg, ${fcolor}, ${scolor})`,
    }}>
        <img src={img} alt='lang.svg'/>
        <h3> {lang} </h3>
    </div>
  );
};

Card.propTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string,
};

export default Card