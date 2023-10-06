import'./leftcontainercontacts.css'
import { useEffect, useState } from 'react'

//Interfaces 
import { UserContacts } from '../../interfaces/user'

//API
import { getUserContactsAccepted } from '../../api/contacts.api'

//Components 
import CardLeftContainer from '../cardLeftContainer/cardLeftContainer'

function LeftContainerContacts() {

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
          />
        ))
      }
    </div>
  )
}

export default LeftContainerContacts