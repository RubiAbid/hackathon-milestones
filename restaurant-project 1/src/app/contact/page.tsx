// src/app/contact/page.tsx

import Contact from "@/components/Contact"; // Import the Contact component (adjust path if needed)

const ContactPage = () => {
  return (
    <main className="container mx-auto p-6">
      {/* Heading and description for the Contact page */}
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-lg mb-6">
        If you have any questions or need assistance, feel free to reach out to us using the options below.
      </p>
      
      {/* Contact component with dropdown functionality */}
      <Contact />
    </main>
  );
};

export default ContactPage;
