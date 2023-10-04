import chatLogo from '../../assets/chaticon.png';
import acceptUser from '../../assets/agregar-usuario.png';
import logoutIcon from '../../assets/cerrar-sesion.png';
import addUser from '../../assets/anadir.png';
import { toast } from 'sonner';
import { useAuthStore } from '../../store/auth.store';
import { Badge, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import './navbar.css'

//Components
import InputShared from '../Shared/InputShared/InputShared';
import { BtnCancel } from '../Shared/Buttons/Buttons';
import UserContactCard from '../userContactCard/UserContactCard';

//API
import { getContacts } from '../../api/contacts.api';

//Interfaces
import { InputSharedProps } from '../../interfaces/inputSharedProps';
import { UserContact } from '../../interfaces/user';
import UserContactsToAccept from '../userContactsToAccept/UserContactsToAccept';

interface props {
  socket: any;
}

function Navbar({ socket }: props) {
  const [open, setOpen] = useState(false);
  const [userContactsDrawer, setUserContactsDrawer] = useState(false)
  const [loading, setLoading] = useState(false);
  const [usersContacts, setUsersContacts] = useState<UserContact[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [contactsCount, setContactsCount] = useState(0);

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
  const handleChangeSearchContact = async (data: InputSharedProps) => {
    setLoading(true)
    try {
      const res = await getContacts(data.value);
      const users: UserContact[] = Object.values(res.data); 
      setUsersContacts(users);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <div className='navbarMainContainer'>
      <Modal
        open={open}
        title="Agregar contacto"
        onCancel={() => setOpen(false)}
        footer={[
          <div key="btnFooterDrawerContainer" className='btnFooterDrawerContainer'>
            <BtnCancel
              btnName='Cerrar'
              btnHandleClick={() => setOpen(false)}
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
        <div>
          {loading ? <p><MagnifyingGlass
            visible={true}
            height="50"
            width="50"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor='#c0efff'
            color='#242424'
          /></p> : null}
          <div className='contactsUsersContainer'>
            {!loading && usersContacts ? 
              usersContacts.map((user, index) => (
                <UserContactCard
                  _id={user._id}
                  key={index}
                  username={user.username}
                />
              )) : errorMessage
            }
          </div>
        </div>
      </Modal>
      <div className='logoContainer'>
        <img src={chatLogo} alt="chatlogo" className='chatlogo' />
        <h1 className='navbarTitle'>Chatio</h1>
      </div>
      <div className='rightContainerNavbar'>
        <img src={addUser} className='userIcon' alt="adduserIcon" onClick={() => setOpen(true)} />
        <div className='acceptUserContainer' >
          <Badge count={contactsCount} size="small">
            <img src={acceptUser} className='acceptIcon' alt="addUserIcon" onClick={() => setUserContactsDrawer(!userContactsDrawer)}/>
            <UserContactsToAccept
              openDrawer={userContactsDrawer}
              contactsNum={(data) => setContactsCount(data)}
            />
          </Badge>
        </div>

        <img src={logoutIcon} className='userIcon' alt="logoutIcon" onClick={handleClickLogout} />
      </div>
    </div>
  )
}

export default Navbar