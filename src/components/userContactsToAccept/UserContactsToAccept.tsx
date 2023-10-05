import { useEffect, useState } from 'react';
import { Modal } from 'antd';
import './userContactsToAccept.css'

//Interfaces 
import { UserContact } from '../../interfaces/user';

//Components
import { BtnCancel } from '../Shared/Buttons/Buttons';
import UserContactToAcceptCard from '../userContactToAcceptCard/UserContactToAcceptCard';

//API
import { getContactsToAccept } from '../../api/contacts.api';

interface Props { 
  openDrawer: boolean;
  contactsNum: (data: number) => void;
}

function UserContactsToAccept({contactsNum, openDrawer}: Props) {
  const [open, setOpen] = useState(false);
  const [contactsToAccept, setContactsToAccept] = useState<UserContact[]>([]);

console.log(contactsToAccept);
  
  const getContactsToAcceptFunction = async () => {
    try {
      const res = await getContactsToAccept();
      setContactsToAccept(res.data);
      contactsNum(res.data.length);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setOpen(openDrawer);
    getContactsToAcceptFunction()
  }, [openDrawer]);
  
  return (
    <div className='userContactsToAcceptMainContainer'>
      <Modal
        open={open}
        title="Aceptar Contactos"
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
        <div className='contactToAcceptContainer'>
          {contactsToAccept.map((contact, index) => (
            <UserContactToAcceptCard 
              key={index}
              username={contact.username}
            />
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default UserContactsToAccept