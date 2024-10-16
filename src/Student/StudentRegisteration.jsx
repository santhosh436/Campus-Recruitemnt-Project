import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    dob: '',
    sscYear: '',
    sscPercentage: '',
    interYear: '',
    interPercentage: '',
    btechStream: '',
    btechPercentage: '',
    backlogs: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
  
    // Basic Information validations
    if (step === 1) {
      if (!formData.email) {
        tempErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = 'Email is not valid';
      }
  
      if (!formData.password) {
        tempErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        tempErrors.password = 'Password must be at least 6 characters';
      }
  
      if (!formData.dob) {
        tempErrors.dob = 'Date of Birth is required';
      }
    }
  
    // Academic Details validations (Step 2)
    if (step === 2) {
      if (!formData.sscYear || formData.sscYear.length !== 4) {
        tempErrors.sscYear = 'Valid SSC Year is required';
      }
  
      if (!formData.sscPercentage || formData.sscPercentage <= 0 || formData.sscPercentage > 100) {
        tempErrors.sscPercentage = 'SSC Percentage must be between 0 and 100';
      }
  
      if (!formData.interYear || formData.interYear.length !== 4) {
        tempErrors.interYear = 'Valid Intermediate Year is required';
      }
  
      if (!formData.interPercentage || formData.interPercentage <= 0 || formData.interPercentage > 100) {
        tempErrors.interPercentage = 'Intermediate Percentage must be between 0 and 100';
      }
  
      if (!formData.btechStream) {
        tempErrors.btechStream = 'B.Tech Stream is required';
      }
  
      if (!formData.btechPercentage || formData.btechPercentage <= 0 || formData.btechPercentage > 100) {
        tempErrors.btechPercentage = 'B.Tech Percentage must be between 0 and 100';
      }
  
      if (formData.backlogs < 0) {
        tempErrors.backlogs = 'Number of backlogs cannot be negative';
      }
    }
  
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    console.log(formData);

    try {
      const response = await fetch('http://localhost:8090/api/student/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Registration successful!', {
          position: 'top-right',
          autoClose: 3000,
        });
        setFormData({
          email: '',
          password: '',
          dob: '',
          sscYear: '',
          sscPercentage: '',
          interYear: '',
          interPercentage: '',
          btechStream: '',
          btechPercentage: '',
          backlogs: '',
        });
        setStep(1);
      } else {
        toast.error('Registration failed!', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error('Error occurred during registration. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-custom-blue via-custom-gray-light to-custom-gray-dark px-4 py-20">
      <div className="flex items-center justify-between w-full max-w-xl mb-8">
        {/* Step Indicators */}
        <div className="w-full flex justify-around mb-4">
          <div className={`text-center ${step === 1 ? 'text-blue-500 font-semibold' : 'text-gray-400'}`}>
            <p className="mb-1">1</p>
            <p>Basic Info</p>
          </div>
          <div className={`text-center ${step === 2 ? 'text-blue-500 font-semibold' : 'text-gray-400'}`}>
            <p className="mb-1">2</p>
            <p>Academic Details</p>
          </div>
          <div className={`text-center ${step === 3 ? 'text-blue-500 font-semibold' : 'text-gray-400'}`}>
            <p className="mb-1">3</p>
            <p>Upload Documents</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter the Email'
                value={formData.email}
                onChange={handleChange}
                className={`w-full border-b-2 py-2 px-3 focus:border-blue-500 outline-none ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password <span className="text-red-500">*</span></label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border-b-2 py-2 px-3 focus:border-blue-500 outline-none ${errors.password ? 'border-red-500' : 'border-gray-400'}`}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-gray-700">Date of Birth <span className="text-red-500">*</span></label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className={`w-full border-b-2 py-2 px-3 focus:border-blue-500 outline-none ${errors.dob ? 'border-red-500' : 'border-gray-400'}`}
              />
              {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            </div>
            <div className="flex justify-between">
              <button className="px-4 py-2 bg-gray-400 text-white rounded-lg" disabled>Previous</button>
              <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Next</button>
            </div>
          </div>
        )}
{step === 2 && (
  <div>
    <h2 className="text-xl font-semibold mb-4">Academic Details</h2>

    <div className="mb-4">
      <label htmlFor="sscYear" className="block text-gray-700">SSC Year of Passing <span className="text-red-500">*</span></label>
      <input
        type="number"
        id="sscYear"
        name="sscYear"
        value={formData.sscYear}
        onChange={handleChange}
        required
        className={`w-full border-b-2 py-2 px-3 focus:border-blue-500 outline-none ${errors.sscYear ? 'border-red-500' : 'border-gray-400'}`}
      />
      {errors.sscYear && <p className="text-red-500 text-sm">{errors.sscYear}</p>}
    </div>

    <div className="mb-4">
      <label htmlFor="sscPercentage" className="block text-gray-700">SSC Percentage <span className="text-red-500">*</span></label>
      <input
        type="number"
        step="0.01"
        id="sscPercentage"
        name="sscPercentage"
        value={formData.sscPercentage}
        onChange={handleChange}
        required
        className={`w-full border-b-2 py-2 px-3 focus:border-blue-500 outline-none ${errors.sscPercentage ? 'border-red-500' : 'border-gray-400'}`}
      />
      {errors.sscPercentage && <p className="text-red-500 text-sm">{errors.sscPercentage}</p>}
    </div>

    <div className="mb-4">
      <label htmlFor="interYear" className="block text-gray-700">Intermediate Year of Passing <span className="text-red-500">*</span></label>
      <input
        type="number"
        id="interYear"
        name="interYear"
        value={formData.interYear}
        onChange={handleChange}
        required
        className={`w-full border-b-2 py-2 px-3 focus:border-blue-500 outline-none ${errors.interYear ? 'border-red-500' : 'border-gray-400'}`}
      />
      {errors.interYear && <p className="text-red-500 text-sm">{errors.interYear}</p>}
    </div>

    <div className="mb-4">
      <label htmlFor="interPercentage" className="block text-gray-700">Intermediate Percentage <span className="text-red-500">*</span></label>
      <input
        type="number"
        step="0.01"
        id="interPercentage"
        name="interPercentage"
        value={formData.interPercentage}
        onChange={handleChange}
        required
        className={`w-full border-b-2 py-2 px-3 focus:border-blue-500 outline-none ${errors.interPercentage ? 'border-red-500' : 'border-gray-400'}`}
      />
      {errors.interPercentage && <p className="text-red-500 text-sm">{errors.interPercentage}</p>}
    </div>

    <div className="mb-4">
      <label htmlFor="btechStream" className="block text-gray-700">B.Tech Stream <span className="text-red-500">*</span></label>
      <input
        type="text"
        id="btechStream"
        name="btechStream"
        value={formData.btechStream}
        onChange={handleChange}
        required
        className={`w-full border-b-2 py-2 px-3 focus:border-blue-500 outline-none ${errors.btechStream ? 'border-red-500' : 'border-gray-400'}`}
      />
      {errors.btechStream && <p className="text-red-500 text-sm">{errors.btechStream}</p>}
    </div>

    <div className="mb-4">
      <label htmlFor="btechPercentage" className="block text-gray-700">B.Tech Percentage <span className="text-red-500">*</span></label>
      <input
        type="number"
        step="0.01"
        id="btechPercentage"
        name="btechPercentage"
        value={formData.btechPercentage}
        onChange={handleChange}
        required
        className={`w-full border-b-2 py-2 px-3 focus:border-blue-500 outline-none ${errors.btechPercentage ? 'border-red-500' : 'border-gray-400'}`}
      />
      {errors.btechPercentage && <p className="text-red-500 text-sm">{errors.btechPercentage}</p>}
    </div>

    <div className="mb-4">
      <label htmlFor="backlogs" className="block text-gray-700">Number of Backlogs <span className="text-red-500">*</span></label>
      <input
        type="number"
        id="backlogs"
        name="backlogs"
        value={formData.backlogs}
        onChange={handleChange}
        required
        className={`w-full border-b-2 py-2 px-3 focus:border-blue-500 outline-none ${errors.backlogs ? 'border-red-500' : 'border-gray-400'}`}
      />
      {errors.backlogs && <p className="text-red-500 text-sm">{errors.backlogs}</p>}
    </div>

    <div className="flex justify-between">
      <button onClick={handlePrevious} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Previous</button>
      <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Next</button>
    </div>
  </div>
)}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
            <div className="mb-4">
              <input type="file" className="w-full" />
            </div>
            <div className="flex justify-between">
              <button onClick={handlePrevious} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Previous</button>
              <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded-lg" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default StudentRegistration;
