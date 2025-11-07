import React, { useState } from "react";
import prulifeLogo from "../assets/prulifeLogo.svg";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    account: "",
    email: "",
    contact: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // replace with your email sending logic
    setSubmitted(true);
    setFormData({
      fullName: "",
      account: "",
      email: "",
      contact: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-200" id="about">
      {/* Hero/About Section */}
      <section className="flex flex-col items-center px-4 py-16 text-center">
        <img
          src={prulifeLogo}
          alt="PruLife UK Logo"
          className="mb-6 h-16 w-auto"
        />
        <h1 className="mb-4 text-4xl font-bold text-red-600">
          About PruLife UK
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-gray-700">
          PruLife UK helps individuals and families achieve financial security
          and peace of mind. Share your feedback or ideas with our development
          team using the form below.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="flex justify-center px-4 pb-16">
        <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-xl shadow-lg md:flex-row">
          {/* Left Column */}
          <div className="flex flex-col justify-center bg-gradient-to-br from-red-800 to-red-950 p-10 text-white md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
            <p className="mb-6 text-gray-200">
              Not sure what you need? Our team is happy to listen and suggest
              solutions you haven’t considered.
            </p>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xl">✉️</span>
              <p className="font-medium text-gray-100">brtbrt123@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <p className="font-medium text-gray-100">(+65) 986575656</p>
            </div>
          </div>

          {/* Right Column / Form */}
          <div className="bg-gray-50 p-10 md:w-1/2">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              We’d love to hear from you!
            </h3>
            <p className="mb-4 text-gray-600">Let’s get in touch</p>

            {submitted && (
              <p className="mb-4 rounded border border-green-300 bg-green-50 p-3 font-medium text-green-700">
                Thank you! Your message has been sent.
              </p>
            )}

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 transition focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none"
                required
              />
              <input
                type="text"
                name="account"
                placeholder="Account"
                value={formData.account}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 transition focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 transition focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none"
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 transition focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 transition focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none md:col-span-2"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 transition focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none md:col-span-2"
                required
              ></textarea>
              <button
                type="submit"
                className="rounded-lg bg-red-600 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 md:col-span-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
