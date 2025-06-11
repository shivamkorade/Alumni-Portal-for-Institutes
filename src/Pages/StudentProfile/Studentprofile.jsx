import React, { useContext } from "react";
import "./Studentprofile.css";
import ProfileHeader from "../../Components/StudentprofileComp/ProfileHeader.jsx";
import ContactInfo from "../../Components/StudentprofileComp/ContactInfo";
import EducationCard from "../../Components/StudentprofileComp/EducationCard";
import ExperienceCard from "../../Components/StudentprofileComp/ExperienceCard";
import { AuthContext } from "../../Context/AuthContext.jsx";

const Studentprofile = () => {
  const { user } = useContext(AuthContext);

  // Sample user data
  const userInfo = {
    name: user.fullName,
    profileImg: user.profilePicture,
    course: `${user.academicDetails.course}, ${user.academicDetails.yearOfAdmission} - ${user.academicDetails.yearOfPassing}, ${user.academicDetails.stream}` ,
    location: user.contactDetails.currentAddress,
    email: user.email,
    phone: user.contactDetails.mobileNo,
    gender: user.gender,
    regNo: user.enrollmentNo,
    address:
      user.contactDetails.permanentAddress,
    institute: {
      name: "PADMABHOOSHAN VASNTDADA PATIL INSTITUTE OF TECHNOLOGY, BAVDHAN",
      img: "/src/assets/images/logo.svg",
      duration: `${user.academicDetails.course}, ${user.academicDetails.yearOfAdmission} - ${user.academicDetails.yearOfPassing}, ${user.academicDetails.stream}`,
    },
    experience: {
      company: "WeAgile",
      img: "/src/assets/images/companyImg.jpeg",
      position: "CEO",
      startDate: "Apr, 2024",
      endDate: "Present",
    },
    linkedIn: user.socialMediaAccounts.linkedIn,
    facebook: user.socialMediaAccounts.facebook || `https://www.facebook.com/`,
    twitter: user.socialMediaAccounts.instagram || `https://www.instagram.com/`,
  };

  return (
    <div className="stud-profile-container">
      <ProfileHeader user={userInfo} />

      <div className="d-flex">
        <div className="left ">
          <ContactInfo user={userInfo} />
        </div>

        <div className="right">
          <EducationCard institute={userInfo.institute} />
          <ExperienceCard experience={userInfo.experience} />
        </div>
      </div>
    </div>
  );
};

export default Studentprofile;
