import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating a form submission
    setTimeout(() => {
      alert(
        "Thank you for reaching out! Your message has been successfully sent. We&apos;ll get back to you as soon as possible 🎊🥳"
      );
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="contact-page">
      <section className="contact-form-section">
        <h1>Contact Us</h1>
        <p>We&apos;d love to hear from you!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>

      <style jsx>{`
        .contact-page {
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          color: #fff;
          padding: 50px 20px;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .contact-form-section {
          background-color: rgba(0, 0, 0, 0.7);
          padding: 40px;
          border-radius: 10px;
          width: 100%;
          max-width: 600px;
          text-align: center;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }

        .form-group {
          margin-bottom: 20px;
          text-align: left;
        }

        label {
          display: block;
          font-size: 1rem;
          margin-bottom: 5px;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border-radius: 5px;
          border: none;
          margin-bottom: 10px;
          background-color: #fff;
          color: #333;
        }

        button {
          background-color: #0072ff;
          color: #fff;
          border: none;
          padding: 15px 30px;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
