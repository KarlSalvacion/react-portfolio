import React, { useState } from 'react';
import './introduction.css';
import karlpic from "../src/images/karlreal.png";
import jamesreidpic from "../src/images/JAMESREID.JPG";

const Introduction = () => {
  const [image, setImage] = useState(karlpic);
  const [flip, setFlip] = useState(false); 
  
  const handleClick = () => {
    setFlip(true);
    setTimeout(() => {
      setImage(image === karlpic ? jamesreidpic : karlpic);
      setFlip(false);
    }, 450); 
  };

  return (
    <div id="Home" className="introduction">
      <div className="textimage">
        <div className="textcontent">
          <h2 className="intro">Hello! I am</h2>
          <h1 className="firstname">Karl Vincent</h1>
          <h1 className="lastname">Salvacion</h1>
          <p className="textintro">I am currently 3rd year student in De La Salle Lipa and this is my portfolio</p>

          <button type="button" class="btn btn-outline-secondary custom-button" onClick={() => {
            const projectsSection = document.getElementById('Projects');
            const offset = 100;
            const scrollPosition = projectsSection.offsetTop - offset;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
          }}>CONTINUE</button>
        </div>
        <div className="image-container">
          <img
            src={image}
            alt={image === karlpic ? 'karl pic' : 'james reid pic'}
            className={`picme ${flip ? 'flip' : ''}`}
            onClick={handleClick} 
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;