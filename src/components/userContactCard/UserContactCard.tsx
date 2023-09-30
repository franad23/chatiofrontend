import './usercontactcard.css';
import addContactIcon from '../../assets/anadir.png';
import checkContactIcon from '../../assets/correcto.png'

interface PropsCard {
  username: string;
  handleAddContact?: () => void;
}

function UserContactCard({handleAddContact, username}: PropsCard) {
  return (
    <div className='userContactCardMainContainer'>
      <h1 className='usernameCardTitle'>{username}</h1>
      <img src={addContactIcon} alt="addcontactIcon" className='iconsUserContactCard notShowUserContact'/>
      {/* <img src={checkContactIcon} alt="checkicon" className='iconsUserContactCard'/> */}
    </div>
  )
}

export default UserContactCard