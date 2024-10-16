import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information Block */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-xl font-semibold mb-4">Contact Information</h5>
            <p>
              <strong>Address:</strong><br />
              Tata STRIVE Skill Development Centre<br />
              3rd floor, NSL Centrum Mall, KPHB Phase III, KPHB,<br />
              KPHB Phase 2, Kukatpally, Hyderabad,<br />
              Telangana 500072.
            </p>
            <Link to="contactus"><button className='text-black bg-white mt-2 px-2 py-1 rounded-[8px]'>Contact Us</button></Link>
          </div>

          {/* Phone Details Block */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-xl font-semibold mb-4">Contact Details</h5>
            <p>
              <strong>Phone:</strong><br />
              <a href="tel:18004192112" className="text-blue-400 hover:underline">1800-419-2112</a><br />
              <strong>Email:</strong><br />
              <a href="mailto:STRIVE@tatastrive.com" className="text-blue-400 hover:underline">STRIVE@tatastrive.com</a>
            </p>
            <div className="mt-6">
              <h5 className="text-xl font-semibold mb-4">About Us</h5>
              <ul>
                <li><a href="/news" className="text-blue-400 hover:underline">Tata STRIVE in the news</a></li>
                <li><a href="/life" className="text-blue-400 hover:underline">Life@STRIVE</a></li>
              </ul>
            </div>
          </div>

          {/* Map Block */}
          <div className="w-full md:w-1/3">
            <h5 className="text-xl font-semibold mb-4">Find Us</h5>
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.316158972152!2d78.39693911466448!3d17.487523888094522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35c7fd7e2206d1%3A0x41e3a519b59cc6a2!2sTata%20STRIVE%20Skill%20Development%20Centre%2C%20NSL%20Centrum%20Mall%2C%20KPHB%20Phase%20III%2C%20KPHB%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1634553169492!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
