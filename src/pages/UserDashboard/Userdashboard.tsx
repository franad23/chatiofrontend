import io from "socket.io-client";
import { useEffect, useState } from 'react';
import './Userdashboard';

//Components
import Navbar from '../../components/Navbar/Navbar';

const storedUser = localStorage.getItem("auth");
const customUserId = storedUser ? JSON.parse(storedUser).state.profile : null;

const socket = io("http://localhost:3000", {
  auth: {
    customUserId,
  },
})

function Userdashboard() {
  const [receivedMessages, setReceivedMessages] = useState<object[]>([]);

  useEffect(() => {
    socket.on("message", (data) => {
      setReceivedMessages([...receivedMessages, data]);
    });
    socket.on("connectedUsers", (data) => {
      console.log(data);
    });
  });

  return (
    <div>
      <Navbar />
      Userdashboard
    </div>
  )
}

export default Userdashboard