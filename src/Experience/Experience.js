import React from "react";
import "./Experience.scss";
import FormulaInvaders from "../assets/images/FormulaInvaders.png";
import ssExperience from '../assets/images/ssExperience.png'
import sculpt from '../assets/images/sculptExperience.png'
import njstar from '../assets/images/njstar.png'
import coming from '../assets/images/comingsoon.png'


function Experience() {
  return (
   <div className="experienceDiv">
<div className="experienceBoxDiv">

  <div className="experienceBox">
    <a href="https://www.sshomehealthagency.com/">
<img src={ssExperience}/>


<div className="description">
  <p className="descriptionTitle">S&S Home Health Care</p>
  <div className="descriptionButtons">
    <p className="descriptionButtonText">Developer</p>
    <p className="descriptionButtonText">Producer</p>
  </div>
</div>
</a>
  </div>
  <div className="experienceBox">
<img src={sculpt} />
<div className="description">
  <p className="descriptionTitle">Sculpt</p>
  <div className="descriptionButtons">
    <p className="descriptionButtonText">Developer</p>
    <p className="descriptionButtonText">Producer</p>
  </div>
</div>
</div>
<div className="experienceBox">
<img src={njstar} />
<div className="description">
  <p className="descriptionTitle">NJ Star Health Care</p>
  <div className="descriptionButtons">
    <p className="descriptionButtonText">Developer</p>
    <p className="descriptionButtonText">Producer</p>
  </div>
</div>
</div>



  <div className="experienceBox">
<img src={sculpt}/>
<div className="description">
  <p className="descriptionTitle">S&S Home Health Care</p>
  <div className="descriptionButtons">
    <p className="descriptionButtonText">Developer</p>
    <p className="descriptionButtonText">Producer</p>
  </div>
</div>
  </div>
  <div className="experienceBox">
<img src={sculpt} />
<div className="description">
  <p className="descriptionTitle">S&S Home Health Care</p>
  <div className="descriptionButtons">
    <p className="descriptionButtonText">Developer</p>
    <p className="descriptionButtonText">Producer</p>
  </div>
</div>
</div>
<div className="experienceBox">
<img src={sculpt} />
<div className="description">
  <p className="descriptionTitle">S&S Home Health Care</p>
  <div className="descriptionButtons">
    <p className="descriptionButtonText">Developer</p>
    <p className="descriptionButtonText">Producer</p>
  </div>
</div>
</div>
</div>
   </div>
  
  );
}

export default Experience;
