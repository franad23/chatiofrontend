import { useState } from 'react';
import addContactIcon from '../../assets/anadir.png';
import checkContactIcon from '../../assets/correcto.png';
import { toast } from 'sonner';
import './usercontactcard.css';

interface PropsCard {
  username: string;
  handleAddContact: (name: string) => void;
}



function UserContactCard({handleAddContact, username}: PropsCard) {
  const [contactAdded, setcontactAdded] = useState(false);
  

  const handleClickAddContact = (username: string) => {
    setcontactAdded(!contactAdded);
    toast(`Se agrego a ${username} como contacto`);
    handleAddContact(username);
  }
  return (
    <div className='userContactCardMainContainer'>
      <h1 className='usernameCardTitle'>{username}</h1>
      <img 
        src={addContactIcon} 
        alt="addcontactIcon" 

        className={contactAdded ? 'iconsUserContactCard notShowUserContact' : 'iconsUserContactCard'}
        onClick={() => handleClickAddContact(username)}
      />
      <img 
        src={checkContactIcon} 
        alt="checkicon" 
        className={contactAdded ? 'iconsUserContactCard' : 'iconsUserContactCard notShowUserContact'}
      />
    </div>
  )
}

export default UserContactCard