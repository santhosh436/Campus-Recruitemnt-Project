import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hompage from './Pages/Hompage'
import CompanyLoginPage from './Pages/CompanyLoginPage'
import StudentLoginPage from './Pages/StudentLoginPage'
import CompanyRegisterationPage from './Pages/CompanyRegisterationPage'
import StudentRegisterationPage from './Pages/StudentRegisterationPage'
import StudentDashboardPage from './Pages/StudentDashboardPage'
import CompanyDashboardPage from './Pages/CompanyDashboardPage'
import AdminLoginPage from './Pages/AdminLoginPage'
import ContactUsPage from './Pages/ContactUsPage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Hompage/>}/>
        <Route path='companylogin' element={<CompanyLoginPage/>}/>
        <Route path='studentlogin' element={<StudentLoginPage/>}/>
        <Route path='adminlogin' element={<AdminLoginPage/>}/>
        <Route path='/companyregister' element={<CompanyRegisterationPage/>}/>
        <Route path='/studentregister' element={<StudentRegisterationPage/>}/>
        <Route path = '/studentdashboard' element={<StudentDashboardPage/>}/>
        <Route path = '/companydashboard' element={<CompanyDashboardPage/>}/>
        <Route path='/contactus' element={<ContactUsPage/>}/>

      </Routes>
      
      

    </div>
  )
}

export default App
