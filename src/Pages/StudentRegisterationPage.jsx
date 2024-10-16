import React from 'react'
import Navbar from '../Components/Navbar'
import StudentRegistration from '../Student/StudentRegisteration'
import Footer from '../Components/Footer'

const StudentRegisterationPage = () => {
  return (
    <div className='bg-gradient-to-b from-custom-blue via-custom-gray-light to-custom-gray-dark'>
        <Navbar/>
        <div>
        <StudentRegistration />
        </div>
        <Footer/>
      
    </div>
  )
}

export default StudentRegisterationPage
