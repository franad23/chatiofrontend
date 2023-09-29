import chatLogo from '../../assets/chaticon.png';
import addUser from '../../assets/agregar-usuario.png';
import logoutIcon from '../../assets/cerrar-sesion.png';
import { Toaster, toast } from 'sonner';
import { useAuthStore } from '../../store/auth.store';
import './navbar.css'

function Navbar() {
  
  const setLogout = useAuthStore(state => state.setLogout);

  const handleClickLogout = () => {
    toast('Seguro de cerrar Sesion?', {
      action: 
        {
          label: 'Sí',
          onClick: () => {
            setLogout();
          }
        }
    })
  }

  return (
    <div className='navbarMainContainer'>
      <Toaster position="top-right" />
      <div className='logoContainer'>
        <img src={chatLogo} alt="chatlogo" className='chatlogo'/>
        <h1 className='navbarTitle'>Chatio</h1>
      </div>
      <div className='rightContainerNavbar'>
        <img src={addUser} className='userIcon' alt="addUserIcon" />
        <img src={logoutIcon} className='userIcon' alt="logoutIcon" onClick={handleClickLogout}/>
      </div>
    </div>
  )
}

export default Navbar