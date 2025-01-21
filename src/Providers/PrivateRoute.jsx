/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "./AuthProviders"
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

  const { user } = useContext(AuthContext)
  if (user) {
    return children;
  }

  return <Navigate to={"/"} />
}

export default PrivateRoute