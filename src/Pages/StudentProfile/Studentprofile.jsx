import React from 'react'
import './Studentprofile.css'
import ProfileHeader from "../../Components/StudentprofileComp/ProfileHeader.jsx";
import ContactInfo from "../../Components/StudentprofileComp/ContactInfo";
import EducationCard from "../../Components/StudentprofileComp/EducationCard";
import ExperienceCard from "../../Components/StudentprofileComp/ExperienceCard";

const Studentprofile = () => {
     // Sample user data
    const user = {
    name: "Babdoo Raut",
    profileImg:"/src/assets/images/profileImg.jpg",
    course: "B.Tech. 2020 - 2019, CSE",
    location: "Pune, Maharashtra",
    email: "prkorade@gmail.com",
    phone: "+91 8390208468",
    gender: "Male",
    regNo: "101200002",
    address: "Span Recidency E-16 vishwakarma nagar sus Road pashan pune 411021",
    institute: {
      name: "PADMABHOOSHAN VASNTDADA PATIL INSTITUTE OF TECHNOLOGY, BAVDHAN",
      img:"/src/assets/images/logo.svg",
      duration: "B.Tech, 2020 - 2019, CSE",
    },
    experience: {
      company: "WeAgile",
      img:"/src/assets/images/companyImg.jpeg",
      position: "CEO",
      startDate: "Apr, 2024",
      endDate: "Present",
    },
    linkedIn: "https://www.linkedin.com/in/babdoo-raut",
    facebook: "https://www.facebook.com/babdoo.raut",
    twitter: "https://twitter.com/babdoo_raut",
  };

  return (
    <div className="stud-profile-container">
      <ProfileHeader user={user} />
      
      <div className="d-flex">
        <div className="left ">
          <ContactInfo user={user} />
        </div>
        
        <div className="right">
          <EducationCard institute={user.institute} />
          <ExperienceCard experience={user.experience} />
        </div>
        
      </div>
    </div>
  )
}

export default Studentprofile