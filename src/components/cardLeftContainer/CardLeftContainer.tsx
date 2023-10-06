import greenDot from '../../assets/greendot.png'
import redDot from '../../assets/redDot.png'
import './cardleftcontainer.css'

interface Props {
  _id: string;
  username: string;
  isOnline?: boolean;
}



function CardLeftContainer({_id, username, isOnline}:Props) {
  return (
    <div className='cardLeftContainerMainContainer'>
      <div className='iconUserCard'>
        {username[0].toLocaleUpperCase()}
      </div>
      <div>
        <h2 className='usernameCardTitleLeftContainer'>{username}</h2>
        <div className='statusContainer'>
          <img className='greendotIcon' src={greenDot} alt="greendot" />
          <span>Online</span>
        </div>
        {/* {isOnline ? <span>Online</span>:null} */}
      </div>
    </div>
  )
}

export default CardLeftContainer