import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Hashim",
      role: "Founder & Developer",
      image: "/team1.jpg"
    },
  ];

  return (
    <div className="about-us">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            Welcome to MAD JACK! We are passionate about creating immersive gaming experiences for everyone.
          </p>
        </div>
      </section>
      <section className="about-details">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            At Mad Jack, our mission is to connect gamers worldwide and provide a platform where they can explore, play, and share their favorite games.
          </p>
          <h2>What We Offer</h2>
          <ul>
            <li>Curated gaming collections</li>
            <li>Exclusive Games</li>
            <li>Community events and tournaments</li>
          </ul>
        </div>
      </section>
      <section className="team-section">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="team-image"
                />
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        .about-us {
          font-family: Arial, sans-serif;
          color: rgb(255, 255, 255);
          background: linear-gradient(135deg, #00c6ff, #0072ff);
        }
        .hero-section {
          padding: 2rem;
          text-align: center;
          background: #1e1e2f;
        }
        .hero-title {
          font-size: 2.5rem;
          color: rgb(255, 255, 255);
        }
        .hero-subtitle {
          font-size: 1.2rem;
          margin-top: 0.5rem;
        }
        .container {
          width: 80%;
          margin: 0 auto;
        }
        .about-details,
        .team-section {
          padding: 2rem 0;
        }
        h2 {
          font-size: 1.8rem;
          color: rgb(0, 0, 0);
          margin-bottom: 1rem;
        }
        p {
          font-size: 1rem;
          line-height: 1.6;
        }
        ul {
          list-style-type: disc;
          padding-left: 1.5rem;
        }
        li {
          margin-bottom: 0.5rem;
        }
        .team-section {
          text-align: center;
        }
        .team-members {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .team-member {
          max-width: 300px;
          margin: 1rem;
          text-align: center;
        }
        .team-image {
          border-radius: 3px;
          object-fit: cover;
          margin-bottom: 1rem;
        }
        .team-role {
          font-weight: bold;
          color: rgb(255, 255, 255);
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
