import React, { useState, useEffect } from 'react';
import { TbCopyPlusFilled } from "react-icons/tb";
import { useLocation } from 'react-router-dom';

const CompanyDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionList, setDescriptionList] = useState([]); 
  const [requirements, setRequirements] = useState([]);

  const location = useLocation();
  const companyId = location.state?.company;

  // Fetch jobs from the backend on component load
  useEffect(() => {
    fetch(`http://localhost:8090/api/jobs/getjobs?companyId=${companyId}`)
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, [companyId]);

  const handleAddDescription = () => {
    setDescriptionList([...descriptionList, description]);
    setDescription('');
  };

  const handleJobSubmit = () => {
    const jobData = {
      title: jobTitle,
      description: descriptionList,
      requirements,
      companyId,
    };
    console.log(jobData);
    fetch('http://localhost:8090/api/jobs/postjobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobData),
    })
      .then((response) => response.json())
      .then((data) => {
        setJobs([...jobs, data]); // Add the new job to the list
        setShowForm(false);
        setJobTitle('');
        setDescriptionList([]);
        setRequirements([]);
        alert('Job post is created!');
      })
      .catch((error) => console.error('Error creating job:', error));
  };

  const handleRequirementSelection = (e) => {
    const selectedRequirement = e.target.value;
    if (!requirements.includes(selectedRequirement)) {
      setRequirements([...requirements, selectedRequirement]);
    }
  };

  return (
    <div className="h-[90vh] p-4">
      <h1 className="text-3xl font-bold mb-4">Company Dashboard</h1>

      {/* Conditionally render plus icon */}
      {jobs.length > 0 ? (
        <div className="flex justify-center mb-6">
          <TbCopyPlusFilled size={40} className="cursor-pointer" onClick={() => setShowForm(true)} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-gray-200 p-10 rounded-lg shadow-md flex flex-col items-center">
            <TbCopyPlusFilled size={40} className="mb-4 cursor-pointer" onClick={() => setShowForm(true)} />
            <p className="text-lg font-semibold">Create the job post</p>
          </div>
        </div>
      )}

      {/* Show job posts if available */}
      {jobs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job, index) => (
            <div key={index} className="p-4 border rounded-md shadow-md">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <ul className="mt-2">
                {/* Make sure job.description exists before mapping */}
                {job.description?.map((desc, idx) => (
                  <li key={idx} className="text-sm">{desc}</li>
                )) || <li>No description available</li>}
              </ul>
              <p className="mt-2 text-gray-600">
                Requirements: {job.requirements?.join(', ') || 'No requirements available'}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Form to create a new job */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Create the job post</h2>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job Title"
              className="w-full border border-gray-300 p-2 mb-4 rounded-md"
            />
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a job description point"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              <button
                onClick={handleAddDescription}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add
              </button>
            </div>
            <ul className="list-disc pl-6 mb-4">
              {descriptionList.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>

            <select
              onChange={handleRequirementSelection}
              className="w-full border border-gray-300 p-2 mb-4 rounded-md"
            >
              <option value="" disabled>Select Requirement</option>
              <option value="SCC Passout Year">SCC Passout Year</option>
              <option value="SCC Percentage">SCC Percentage</option>
              <option value="Skills">Skills</option>
              <option value="Resume">Resume</option>
            </select>

            <button
              onClick={handleJobSubmit}
              className="w-full bg-green-500 text-white p-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDashboard;
