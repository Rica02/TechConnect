import React from "react"
import { Navigate  } from "react-router-dom"
import { useDB } from "./ServerContext"

export default function PrivateRoute({ children }) {
  const { currentUser } = useDB()
  return currentUser ? children :  <Navigate  to="/" />  
}
