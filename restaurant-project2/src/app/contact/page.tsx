// src/app/contact/page.tsx

import Contact from "@/components/Contact"; // Import the Contact component (adjust path if needed)

const ContactPage = () => {
  return (
    <main className="contact-page-container">
      {/* Heading and description for the Contact page */}
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-description">
        If you have any questions or need assistance, feel free to reach out to us using the options below.
      </p>
      
      {/* Contact component with dropdown functionality */}
      <Contact />
    </main>
  );
};

export default ContactPage;
