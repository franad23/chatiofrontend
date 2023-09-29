import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { useAuthStore } from "./store/auth.store";
import './App.css'

//Pages
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Userdashboard from "./pages/UserDashboard/Userdashboard";

function App() {

  const isAuth = useAuthStore(state => state.isAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route element={<ProtectedRoutes isAllowed={isAuth}/>}>
          <Route path="/dashboard" element={<Userdashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App