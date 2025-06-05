import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const EducationCard = ({ institute }) => {
  console.log(institute.img);
  return (
   
    <div className="card">
      <h4>THIS INSTITUTE</h4>
      <div className="card-content">
        <div className="institute-logo">
          <img src={institute.img} alt="" />
        </div>
        <div className="cardtextWrapper">
          <h5>{institute.name}</h5>
          <hr style={{width:"50%",color:"black",opacity:0.8,margin:0,border:"1px solid"}}/>
          <p>{institute.duration}</p>
        </div>
      </div>
      {/* <span className="p-1" style={{borderRadius:"50%",background:"var(--theme-red)"}}> + </span>  */}
      <button className="btn-add"><span className="icon"><AddRoundedIcon/></span>Add Education</button>
    </div>
  );
};

export default EducationCard;
