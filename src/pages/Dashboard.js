import React from 'react'
import StudentPage from './StudentPage'
import TeacherPage from './TeacherPage'
import AdminPage from './AdminPage'

function Dashboard() {
    const admin=localStorage.getItem("admin")
  return (
    <>
        {admin==='1' && (<><AdminPage /></>)}
        {admin==='2' && (<><TeacherPage /></>)}
        {admin==='3' && (<><StudentPage /></>)}
    </>
  )
}

export default Dashboard
