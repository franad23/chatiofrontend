import chatLogo from '../../assets/chaticon.png'
import addUser from '../../assets/agregar-usuario.png'
import logoutIcon from '../../assets/cerrar-sesion.png'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbarMainContainer'>
      <div className='logoContainer'>
        <img src={chatLogo} alt="chatlogo" className='chatlogo'/>
        <h1 className='navbarTitle'>Chatio</h1>
      </div>
      <div className='rightContainerNavbar'>
        <img src={addUser} className='userIcon' alt="addUserIcon" />
        <img src={logoutIcon} className='userIcon' alt="logoutIcon" />
      </div>
    </div>
  )
}

export default Navbar