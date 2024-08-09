import React from 'react';
import '../../../styles/css/Home/Hero.css';
import video from '../../../styles/img/hero2.mp4'; 
import picture from '../../../styles/img/hero2.webp'; 

const Hero = () => {
return (
    <div className="hero-container">
        <video autoPlay loop muted className="hero-video">
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
        
        <div className="hero-content">
            <h1>Hub of Brands</h1>
            <p>A multidisciplinary diversity space where we create y develop any type of brand.
            </p>
        </div>
    </div>
);
};

export default Hero;
