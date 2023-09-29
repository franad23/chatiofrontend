import { Navigate, Outlet } from "react-router-dom";

//Interfaces 
import { PropsProtecredRoutes } from "./interfaces/auth.interface";

export const ProtectedRoutes = ({children, isAllowed}: PropsProtecredRoutes) => {

  if (!isAllowed) return <Navigate to="/login"/>
  return children ? <>{children}</> : <Outlet/>;

}