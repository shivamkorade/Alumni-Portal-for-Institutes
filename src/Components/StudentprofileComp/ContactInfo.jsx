import React from "react";
import { Email, Phone, LocationOn, Male,Female  } from "@mui/icons-material";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const ContactInfo = ({ user }) => {
  return (
    <div className="contact-card">
      <p>
        <Phone /> {user.phone}
      </p>
      <p>
        <Email /> <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
      <p>
      <PersonRoundedIcon /> Alumni Reg. No.: {user.regNo}
      </p>

      <p>
        {user.gender === "Male" ? <Male /> : <Female />} {user.gender}
      </p>

      <p>
        <LocationOn /> {user.address}
      </p>
    </div>
  );
};

export default ContactInfo;
