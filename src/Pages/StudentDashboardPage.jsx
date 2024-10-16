import React from 'react'
import Navbar from '../Components/Navbar'
import StudentDashboards from '../Student/StudentDashboards'
import Footer from '../Components/Footer'

const StudentDashboardPage = () => {
  return (
    <div>
        <Navbar/>
        <StudentDashboards/>
        <Footer/>
      
    </div>
  )
}

export default StudentDashboardPage
