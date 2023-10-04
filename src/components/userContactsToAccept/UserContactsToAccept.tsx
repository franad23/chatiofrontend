import { useEffect, useState } from 'react';
import { Modal } from 'antd';
import './userContactsToAccept.css'

//Interfaces 
import { UserContact } from '../../interfaces/user';

//Components
import { BtnCancel } from '../Shared/Buttons/Buttons';

//API
import { getContactsToAccept } from '../../api/contacts.api';

interface Props { 
  openDrawer: boolean;
  contactsNum: (data: number) => void;
}

function UserContactsToAccept({contactsNum, openDrawer}: Props) {
  const [open, setOpen] = useState(false);
  const [contactsToAccept, setContactsToAccept] = useState<UserContact[]>([]);


  
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
        <div>
          
        </div>
      </Modal>
    </div>
  )
}

export default UserContactsToAccept