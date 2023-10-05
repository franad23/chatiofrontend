import AcceptContact from '../../assets/correcto.png';
import cancelLogo from '../../assets/cancelar.png';
import './usercontacttoacceptcard.css';

//API
import { contactAccepted } from '../../api/contacts.api';

interface Props {
  _id: string;
  username: string;
}

function UserContactToAcceptCard({_id, username}: Props) {

  const handleAcceptUser = async (_id: string, isAccepted: boolean) => {
    try {
      const res = await contactAccepted(_id, isAccepted);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='userContactCardMainContainer'>
    <h1 className='usernameCardTitle'>{username}</h1>
    <div className='iconsContactToAcceptCardContainer'>
      <img 
        src={AcceptContact} 
        alt="addcontactIcon" 

        className= 'iconsUserContactCard'
        onClick={() => handleAcceptUser (_id, true)}
      />
      <img 
        src={cancelLogo} 
        alt="checkicon" 
        className= 'iconsUserContactCard'
        onClick={() => handleAcceptUser (_id, true)}
      />
    </div>
  </div>
  )
}

export default UserContactToAcceptCard