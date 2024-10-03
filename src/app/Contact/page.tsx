"use client"
import React, { useState } from "react";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    console.log("Form submitted: ", formData);

    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

        {submitted ? (
          <div className="text-center text-green-500 text-lg">
            Thank you for contacting us! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gradient-to-r from-[#0a2e73] via-[#5078f0] to-[#a3caff]   max-w-2xl mx-auto  p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter your message"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-green-800 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
