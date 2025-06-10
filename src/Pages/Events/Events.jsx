import React from "react";
import "./events.css";
import alumniMeetImg from "../../assets/alumni-meetup.jpg";
import techfestImg from "../../assets/techfest.jpeg";
import careerFairImg from "../../assets/career-fair.jpg";
import startupShowcaseImg from "../../assets/startup-showcase.jpg";


export default function Events() {
  // You can later fetch these from a database
  const upcomingEvents = [
    {
      name: "Alumni Meet 2025",
      description: "Join us for a grand evening of memories and reconnections as we celebrate the achievements of our alumni across industries, share experiences, and strengthen the PVPIT family spirit.",
      image: alumniMeetImg

    },
    {
      name: "TechFest 2025",
      description: "A 3-day national-level technical extravaganza filled with innovation, coding challenges, workshops, and keynote sessions from tech leaders. Witness the future built by our students.",
      image: techfestImg
    }
  ];

  const pastEvents = [
    {
      name: "Career Fair 2024",
      description: "Over 50 reputed companies participated in our annual Career Fair, providing students across departments the opportunity to explore diverse job roles and career paths through on-campus interviews and workshops.",
      image: careerFairImg
    },
    {
      name: "Startup Showcase 2023",
      description: "Final-year students and young alumni pitched their startup ideas to real investors and mentors, receiving feedback, funding opportunities, and support to launch their ventures beyond the campus walls.",
      image: startupShowcaseImg
    }
  ];

  return (
    <div className="events-container">
      <h1 className="events-title">Events</h1>

      {/* Upcoming Events */}
<section>
  <h2>Upcoming Events</h2>
  <div className="events-grid">
    {upcomingEvents.map((event, index) => (
      <div key={index} className="event-card">
        <img src={event.image} alt={event.name} />
        <div className="event-details">
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <button className="rsvp-btn">RSVP</button>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Past Events */}
<section>
  <h2>Past Events</h2>
  <div className="events-grid">
    {pastEvents.map((event, index) => (
      <div key={index} className="event-card">
        <img src={event.image} alt={event.name} />
        <div className="event-details">
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <button className="rsvp-btn past">View</button>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
