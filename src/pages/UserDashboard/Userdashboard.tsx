import React from 'react'
import { useAuthStore } from '../../store/auth.store'

function Userdashboard() {

  const state = useAuthStore(state => state);

  console.log(state);


  return (
    <div>
      Userdashboard
    </div>
  )
}

export default Userdashboard