import React from 'react';
import Image from 'next/image'; // Use Next.js Image component
import Link from 'next/link'; // Use Next.js Link component
import styles from '../styles/Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Replace <img> with <Image> */}
          <Image 
            src="/logo.webp" 
            alt="GamesKart Logo" 
            width={150} 
            height={75} 
            className={styles.logo} 
            style={{ borderRadius: "8px" }} 
          />
          <h2>MAD JACK</h2>
        </div>
        <div className={styles.links}>
          <ul>
            {/* Replace <a> with <Link> */}
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://github.com/HashimAyamon" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/hashim-a-139a00269" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className={styles.icon} />
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className={styles.contactInfo}>
        <h4 className={`${styles.sectionTitle} h6 mb-3 text-primary`}>Contact Info</h4>
        <ul className="list-unstyled">
          <li><i className="bi bi-geo-alt-fill"></i> MALAPPURAM, Kerala, India</li>
          <li><i className="bi bi-telephone-fill"></i> 9496180153</li>
          <li><i className="bi bi-envelope-fill"></i> ayamonhashim44@gmail.com</li>
        </ul>
      </div>

      <div className={styles.copyRight}>
        <p>&copy; 2025 Mad Jack. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
