import React from 'react'
import { useAuthStore } from '../../store/auth.store'

//Components
import Navbar from '../../components/Navbar/Navbar';

function Userdashboard() {

  const state = useAuthStore(state => state);

  return (
    <div>
      <Navbar/>
      Userdashboard
    </div>
  )
}

export default Userdashboard