import React from 'react';
import RegistrationCard from './RegistrationCard';
import pendingProfile from '../../assets/images/pendingprofile.png'

export default function PendingRegistrations ()  {
  const registrations = [
    {
      name: 'Shivam Korade',
      id: 'AB696969',
      email: 'prkorade@gmail.com',
      phone: '+91 8390208468',
      degree: 'B. Tech. CSE (2021-2025)',
      arn: '103453423',
      joinedDate: 'April 3, 2024, 8:15 AM',
      linkedin: 'https://www.linkedin.com',
      profilePic: pendingProfile
    },
    {
      name: 'Shivam Korade',
      id: 'AB696969',
      email: 'prkorade@gmail.com',
      phone: '+91 8390208468',
      degree: 'B. Tech. CSE (2021-2025)',
      arn: '103453423',
      joinedDate: 'April 3, 2024, 8:15 AM',
      linkedin: 'https://www.linkedin.com',
      profilePic: pendingProfile
    }
  ];

  return (
    <div>
      <h1 className='pendingheading'>Pending Registrations (x)</h1>
      {registrations.map((registration, index) => (
        <RegistrationCard key={index} data={registration} />
      ))}
    </div>
  );
}


