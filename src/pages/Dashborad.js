import React from 'react'
import StudentPage from './StudentPage'
import TeacherPage from './TeacherPage'
function Dashborad() {
    const admin=localStorage.getItem("admin")
  return (
    <>
        {admin==='1' && (<><TeacherPage /></>)}
        {admin==='0' && (<><StudentPage /></>)}
    </>
  )
}

export default Dashborad
