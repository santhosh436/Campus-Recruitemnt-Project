import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CompanyLogin() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8090/api/company/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);

        // Display success toast notification
        if (data !== null) {
          toast.success("You're successfully logged in!", {
            position: "top-right",
            autoClose: 2000,
          });

          // Pass companyId through navigate's state object
          setTimeout(() => {
            navigate('/companydashboard', { state: { company: data.yourId } });
          }, 3000);
        } else {
          toast.error("Invalid Password or username", {
            position: "top-right",
            autoClose: 3000,
          });
        }
        setLoginData({ username: '', password: '' });
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Login failed! Please try again.', {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-custom-blue via-custom-gray-light to-custom-gray-dark">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center mb-6">Company Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              value={loginData.username}
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
              value={loginData.password}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <div className="mt-4 flex justify-between gap-2">
            <a
              href="/forgot-password"
              className="bg-blue-500 text-white py-2 px-3 rounded-lg text-center hover:bg-blue-600 transition duration-300"
            >
              Forgot Password?
            </a>
            <Link
              to="/companyregister"
              className="bg-blue-500 text-white py-2 px-3 rounded-lg text-center hover:bg-blue-600 transition duration-300"
            >
              Register
            </Link>
          </div>
        </form>

        {/* Toast Container to display notifications */}
        <ToastContainer />
      </div>
    </div>
  );
}

export default CompanyLogin;
