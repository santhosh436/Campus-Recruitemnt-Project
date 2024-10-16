import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '', // Add message state
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!contactData.name) {
      tempErrors.name = 'Name is required';
    }
    if (!contactData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactData.email)) {
      tempErrors.email = 'Email is not valid';
    }
    if (!contactData.message) {
      tempErrors.message = 'Message is required';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      // Simulate sending data (you can replace with actual API call)
      console.log(contactData);

      // Show success message using toast
      toast.success('Your message has been sent!', {
        position: 'top-right',
        autoClose: 3000,
      });
      
      // Reset form after submission
      setContactData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      });
      console.error('Error during submission:', error);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-custom-blue via-custom-gray-light to-custom-gray-dark">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center mb-6">Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={contactData.name}
              onChange={handleChange}
              className={`w-full bg-transparent border-b-2 outline-none py-2 ${errors.name ? 'border-red-500' : 'border-gray-400'} focus:border-blue-500`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={contactData.email}
              onChange={handleChange}
              className={`w-full bg-transparent border-b-2 outline-none py-2 ${errors.email ? 'border-red-500' : 'border-gray-400'} focus:border-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={contactData.message}
              onChange={handleChange}
              className={`w-full bg-transparent border-2 rounded-md p-2 ${errors.message ? 'border-red-500' : 'border-gray-400'} focus:border-blue-500`}
              rows="4" // Display as a larger textarea
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ContactUs;
