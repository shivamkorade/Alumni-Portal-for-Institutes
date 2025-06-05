import React from 'react';
import './registrationcard.css';
import PendingRegistrations from './PendingRegistrations';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function RegistrationCard  ({ data })  {
  return (
    <div className="registration-card">
      <div className="reg-card-left-section">
        <div className="reg-card-profile-pic">
        <img src={data.profilePic} alt="Profile" />
        </div>
        <div className="reg-card-user-info">
          <h2 className='reg-card-bold'>{data.name}</h2>
          <p className='reg-card-bold'>{data.id}</p>
          <a href={`mailto:${data.email}`}>{data.email}</a>
          <p className='reg-card-bold'>{data.phone}</p>
        </div>
      </div>

      <div className="reg-card-divider"></div>

      <div className="reg-card-right-section">
        <p className='reg-card-bold'>{data.degree}</p>
        <p className='reg-card-bold'>ARN: <strong>{data.arn}</strong></p>
        <p className='reg-card-light'>Joined on {data.joinedDate}</p>
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="reg-card-linkedin-link">
          <LinkedInIcon className="reg-card-linkedin-icon" fontSize="large" />
          <span className="reg-card-linkedin-text">LinkedIn</span>
        </a>
      </div>

      <div className="reg-card-actions">
        <button className="reg-card-approve">APPROVE & SEND EMAIL</button>
        <button className="reg-card-decline">DECLINE</button>
      </div>
    </div>
  );
}

