import React from "react";
import "./ourstory.css";

export default function OurStory() {
  return (
    <div className="ourstory-container">
      <h1 className="ourstory-title">Our Story</h1>

      {/* TPO Section */}
      <section className="ourstory-section">
        <h2>From the Desk of Our TPO</h2>
        <p>
          At <strong>Padmabhooshan Vasantdada Patil Institute of Technology</strong>, Bavdhan, Pune, our mission has always been to empower students with the knowledge, confidence, and skills to excel in the global landscape. Over the years, we've seen our students not just take jobs, but shape industries and inspire communities.
        </p>
        <p>
          As the Training and Placement Officer, it gives me immense pride to witness the journey of our students — from their first year in college to seeing them evolve into innovators, entrepreneurs, and leaders across the world. Their dedication and achievements continue to bring laurels to our institute.
        </p>
        <p>
          This page is a tribute to those journeys, a living record of the dreams we nurtured together.
        </p>
      </section>

      {/* Alumni Stories Section */}
      <section className="ourstory-section">
        <h2>Alumni Highlights</h2>

        <div className="alumni-card">
          <h3>Pranav Kulkarni - Software Engineer @ Google</h3>
          <p>
            From solving DSA problems in our college library to writing production-grade code at Google, Pranav's journey exemplifies the power of consistency and curiosity.
          </p>
        </div>

        <div className="alumni-card">
          <h3>Shreya Patil - Founder of FinSkillUp</h3>
          <p>
            Shreya turned her passion for finance and education into a successful ed-tech startup that now mentors thousands of students across India.
          </p>
        </div>

        <div className="alumni-card">
          <h3>Aditya Deshmukh - Product Manager @ Swiggy</h3>
          <p>
            A curious mind who always asked "why" — Aditya now crafts product experiences that serve millions of users daily.
          </p>
        </div>
      </section>
    </div>
  );
}
