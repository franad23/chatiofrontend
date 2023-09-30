import io from "socket.io-client";
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { useAuthStore } from "../../store/auth.store";
import './Userdashboard';

//Components
import Navbar from '../../components/Navbar/Navbar';

function Userdashboard() {
  const [receivedMessages, setReceivedMessages] = useState<object[]>([]);
  const [socket, setSocket] = useState<any>(null);
  const profile = useAuthStore(state => state.profile);

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
        console.log(data);
      });
    }
  }, [receivedMessages]);

  return (
    <div>
      <Toaster position="top-right"/>
      <Navbar
        socket= {socket}
      />
      Userdashboard
    </div>
  )
}

export default Userdashboard;