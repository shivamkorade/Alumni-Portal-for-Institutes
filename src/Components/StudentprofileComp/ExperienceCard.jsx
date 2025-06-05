import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="card">
      <h4>CURRENT EXPERIENCE</h4>
      <div className="card-content">
        <div className="experience-logo">
          <img src={experience.img} alt="" />
        </div>
        <div>
        <div className="cardtextWrapper">
          <h5>{experience.company}</h5>
          <p className="mb-0" style={{fontFamily:"Poppins"}}>{experience.position}</p>
          <hr style={{width:"50%",color:"black",opacity:0.8,margin:0,border:"1px solid"}}/>
          <p>{experience.startDate} - {experience.endDate}</p>
        </div>
        </div>
      </div>
      <button className="btn-add"><span className="icon"><AddRoundedIcon/></span>Add Education</button>
    </div>
  );
};

export default ExperienceCard;
