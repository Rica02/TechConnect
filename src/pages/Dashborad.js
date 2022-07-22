import React from 'react'
import StudentPage from './StudentPage'
import TeacherPage from './TeacherPage'
import {useDB} from '../ServerContext'
function Dashborad() {
    const {currentUser}=useDB()
    console.log(currentUser.admin)
  return (
    <>
        {currentUser.admin==1 && (<><TeacherPage /></>)}
        {currentUser.admin==0 && (<><StudentPage /></>)}
    </>
  )
}

export default Dashborad
