import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CompanyRegister() {
  const [registerData, setRegisterData] = useState({
    companyName: '',
    established: '',
    hrName: '',
    email: '',
    contactNo: '',
    yourId: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registerData);
    try {
      const response = await fetch('http://localhost:8090/api/company/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);

        // Display success toast notification
        toast.success('Registration successful!', {
          position: 'top-right',
          autoClose: 3000, // Notification will disappear after 3 seconds
        });

        // Redirect or perform further actions here
        // window.location.href = '/welcome'; // Example redirect
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Registration failed! Please try again.', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      });
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h3 className="text-2xl font-semibold text-center mb-6">Company Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter company name"
              value={registerData.companyName}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="established" className="block text-gray-700 font-medium mb-2">Established</label>
            <input
              type="date"
              id="established"
              name="established"
              placeholder="dd-mm-yyyy"
              value={registerData.established}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hrName" className="block text-gray-700 font-medium mb-2">HR Name</label>
            <input
              type="text"
              id="hrName"
              name="hrName"
              placeholder="Enter HR name"
              value={registerData.hrName}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={registerData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNo" className="block text-gray-700 font-medium mb-2">Contact No</label>
            <input
              type="text"
              id="contactNo"
              name="contactNo"
              placeholder="Enter contact number"
              value={registerData.contactNo}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="yourId" className="block text-gray-700 font-medium mb-2">Your ID</label>
            <input
              type="text"
              id="yourId"
              name="yourId"
              placeholder="Enter your ID"
              value={registerData.yourId}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              value={registerData.username}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={registerData.password}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Toast Container to display notifications */}
        <ToastContainer />
      </div>
    </div>
  );
}

export default CompanyRegister;
