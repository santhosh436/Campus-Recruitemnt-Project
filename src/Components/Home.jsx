import React, { useState, useEffect } from 'react';
import companyData from '../Data/CompanyData'; // Import the data object

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % companyData.companies.length);
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // 10000 ms = 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-whie text-center'>
      {/* Scrolling Text Section */}
      <div className="relative bg-green-700 text-gray-200 h-10 overflow-hidden">
        <div className="absolute whitespace-nowrap animate-marquee flex items-center">
          <p className='mx-4 text-xl'>
            Greetings from Campus Management Team! Congratulations to our recently placed champions: Manoj in Accenture, Priya in TCS, and Neeraj in Ediko.
          </p>
        </div>
      </div>

      <div className="bg-green-900 text-gray-200 text-lg font-bold py-2">
        <p>Eligible students, please register for the upcoming placement drives!</p>
      </div>

      {/* Carousel Section */}
      <div className="relative mt-10 overflow-hidden" style={{ height: '400px', maxHeight: '550px' }}>
        <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)`, height: '100%' }}>
          {companyData.companies.map((company, index) => (
            <div key={index} className="flex-shrink-0 w-full bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center" style={{ height: '100%' }}>
              <img src={company.image} className="h-24 w-auto object-contain mb-4" alt={company.name} />
              <h3 className="text-xl font-semibold">{company.name}</h3>
              <p className="text-gray-700 text-center">{company.description}</p>
              <p className="text-gray-800 font-bold">LPA: {company.lpa}</p>
              <div className="mt-4 flex flex-col items-center space-y-4">
                <a href={company.jdLink}>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Job Description
                  </button>
                </a>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {companyData.companies.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-black mb-6">Our Partners</h1>
        <div className="flex overflow-x-auto scroll-smooth  overs space-x-4 p-4 bg-gradient-to-b from-blue-200 via-gray-300 to-gray-400">
          {companyData.partners.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-64 h-64 p-2 bg-white rounded-lg shadow-md flex items-center justify-center">
              <img src={logo} className="max-h-full max-w-full object-contain" alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
