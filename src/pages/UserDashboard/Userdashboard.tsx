import io from "socket.io-client";
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { useAuthStore } from "../../store/auth.store";
import './Userdashboard';

//Interfaces 
import { UserSocket } from "../../interfaces/user";

//Components
import Navbar from '../../components/Navbar/Navbar';
import LeftContainerContacts from "../../components/leftContainerContacts/LeftContainerContacts";

function Userdashboard() {
  const [receivedMessages, setReceivedMessages] = useState<object[]>([]);
  const [socket, setSocket] = useState<any>(null);
  const profile = useAuthStore(state => state.profile);
  const [usersOnline, setUsersOnline] = useState<UserSocket[]>([])

  useEffect(() => {
    const storedUser = localStorage.getItem("auth");
    const customUserId = storedUser ? JSON.parse(storedUser).state.profile : null;

    if (customUserId) {
      const newSocket = io("http://localhost:3000", {
        auth: {
          customUserId,
        },
      });
      setSocket(newSocket);

      
      newSocket.on("message", (data) => {
        setReceivedMessages([...receivedMessages, data]);
      });
      
      newSocket.on("connectedUsers", (data) => {
        setUsersOnline(data)
      });
    }
  }, [receivedMessages]);
console.log(usersOnline);
  return (
    <div>
      <Toaster position="top-right"/>
      <Navbar
        socket= {socket}
      />
      <main>
        <LeftContainerContacts
          usersOnline={usersOnline}
        />
      </main>
    </div>
  )
}

export default Userdashboard;