import './Contact.css'

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section id="contact" className="bg-[#0a0c23] min-h-screen flex items-center justify-center py-12 px-6">
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <h2 className="text-white text-3xl text-center font-bold mb-12">Contact Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">Send</button>
      </form>
    </section>
  );
}

export default Contact;
