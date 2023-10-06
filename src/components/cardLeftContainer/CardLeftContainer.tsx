import greenDot from '../../assets/greendot.png'
import redDot from '../../assets/redDot.png'
import './cardleftcontainer.css'

interface Props {
  _id: string;
  username: string;
  isOnline?: boolean;
}



function CardLeftContainer({_id, username, isOnline}:Props) {

  console.log(isOnline);
  return (
    <div className='cardLeftContainerMainContainer'>
      <div className='iconUserCard'>
        {username[0].toLocaleUpperCase()}
      </div>
      <div>
        <h2 className='usernameCardTitleLeftContainer'>{username}</h2>
        {
          isOnline ? 
            <div className='statusContainer'>
              <img className='greendotIcon' src={greenDot} alt="greendot" />
            <span>Online</span>
            </div> :
            <div className='statusContainer'>
              <img className='greendotIcon' src={redDot} alt="greendot" />
            <span>Offline</span>
            </div>
        }
        {/* {isOnline ? <span>Online</span>:null} */}
      </div>
    </div>
  )
}

export default CardLeftContainer