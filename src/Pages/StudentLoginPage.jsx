import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import StudentLogin from "../Student/StudentLogin";

const StudentLoginPage = () => {
  return (
    <div>
      <Navbar/>
      <StudentLogin/>
      <Footer/>
    </div>
  )
}

export default StudentLoginPage
