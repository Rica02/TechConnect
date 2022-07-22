import React from 'react'
import {useDB} from '../ServerContext'
function TeacherPage() {
    const {auth}=useDB()
    console.log(auth.admin)
  return (
    <div>
      this is teacherPage
      
    </div>
  )
}

export default TeacherPage
