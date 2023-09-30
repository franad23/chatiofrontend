import chatLogo from '../../assets/chaticon.png';
import acceptUser from '../../assets/agregar-usuario.png';
import logoutIcon from '../../assets/cerrar-sesion.png';
import addUser from '../../assets/anadir.png'
import { toast } from 'sonner';
import { useAuthStore } from '../../store/auth.store';
import { Badge, Modal } from 'antd';
import './navbar.css'
import { useEffect, useState } from 'react';

//Components
import InputShared from '../Shared/InputShared/InputShared';
import { BtnCancel, BtnOk } from '../Shared/Buttons/Buttons';

//API
import { getContacts } from '../../api/contacts.api';

//Interfaces
import { InputSharedProps } from '../../interfaces/inputSharedProps';

interface props {
  socket: any;
}

function Navbar({ socket }: props) {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {

  };

  const handleCancel = () => {
    setOpen(false);
  };

  const setLogout = useAuthStore(state => state.setLogout);

  const handleClickLogout = () => {
    toast('Seguro de cerrar Sesion?', {
      action:
      {
        label: 'Sí',
        onClick: () => {
          setLogout();
          if (socket) {
            socket.disconnect();
          }
        }
      }
    })
  }

  useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  let timerId; 

  const handleChangeSearchContact = async (data: InputSharedProps) => {
    if (timerId) {
      clearTimeout(timerId);
    }
  
    // Configurar un nuevo temporizador para enviar la solicitud después de un retraso
    timerId = setTimeout(async () => {
      console.log(data.value);
      const res = await getContacts(data.value);
      console.log(res);
    }, 500); 
  }
  

  return (
    <div className='navbarMainContainer'>
      <Modal
        open={open}
        title="Agregar contacto"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div key="btnFooterDrawerContainer" className='btnFooterDrawerContainer'>
            <BtnCancel
              btnName='Cerrar'
              btnHandleClick={() => console.log("Cancel")}
              />
            <BtnOk
              btnName='Agregar'
              btnHandleClick={() => console.log("Agregar")}
            />
          </div>
        ]}
      >
        <InputShared
          placeholder="Nombre"
          type="text"
          inputField='Buscar contacto'
          name='searchContact'
          toHandleChange={handleChangeSearchContact}
        />
      </Modal>
      <div className='logoContainer'>
        <img src={chatLogo} alt="chatlogo" className='chatlogo' />
        <h1 className='navbarTitle'>Chatio</h1>
      </div>
      <div className='rightContainerNavbar'>
        <img src={addUser} className='userIcon' alt="adduserIcon" />
        <div className='acceptUserContainer' onClick={showModal}>
          <Badge count={5} size="small">
            <img src={acceptUser} className='acceptIcon' alt="addUserIcon" />
          </Badge>
        </div>
        <img src={logoutIcon} className='userIcon' alt="logoutIcon" onClick={handleClickLogout} />
      </div>
    </div>
  )
}

export default Navbar