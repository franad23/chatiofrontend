import'./leftcontainercontacts.css'
import { useEffect, useState } from 'react'

//Interfaces 
import { UserContacts, UserSocket } from '../../interfaces/user'

//API
import { getUserContactsAccepted } from '../../api/contacts.api'

//Components 
import CardLeftContainer from '../cardLeftContainer/CardLeftContainer'

interface Props { 
  usersOnline: UserSocket[];
}

function LeftContainerContacts({usersOnline}:Props) {

  const [usersAccepted, setUsersAccepted] = useState<UserContacts[]>([])

  useEffect(() => {
    const gettingUsersAccepted = async () => {
      const res = await getUserContactsAccepted();
      setUsersAccepted(res.data);
    }
    gettingUsersAccepted();
  }, [])
console.log(usersAccepted);
  return (
    <div className='leftContainerDashboardMainContainer'>
      {
        usersAccepted.map((user) => (
          <CardLeftContainer
            key={user._id}
            _id={user._id}
            username={user.username}
            isOnline={usersOnline.some(userOnline => userOnline.user.id === user._id)}
          />
        ))
      }
    </div>
  )
}

export default LeftContainerContacts