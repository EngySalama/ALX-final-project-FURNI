import React from 'react';
import './ContactUs.css'; // Import the CSS for styling

function ContactUs() {
  return (
    <div className="contact-us-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>
            Have any questions or want to explore our furniture? Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details">
        <div className="details-box">
          <h3>Call Us</h3>
          <p>+02 332851996</p>
        </div>
        <div className="details-box">
          <h3>Email Us</h3>
          <p>
            <a href="mailto:support@furnicraft.com">support@furnicraft.com</a>
          </p>
        </div>
        <div className="details-box">
          <h3>Visit Our Showroom</h3>
          <p>15 st ahmed mohamed ,naser city , cairo  </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
            required
          />
          <textarea
            placeholder="Your Message"
            className="input-field"
            rows="5"
            required
          />
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;
