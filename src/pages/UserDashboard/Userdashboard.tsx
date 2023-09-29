import { useAuthStore } from '../../store/auth.store';
import io from "socket.io-client";
import { useEffect, useState } from 'react';
import './Userdashboard';

//Components
import Navbar from '../../components/Navbar/Navbar';


const socket = io("http://localhost:4000", {
  // auth: {
  //   customUserId: sessionStorage.getItem("usuario"),
  // },
});

function Userdashboard() {

  const state = useAuthStore(state => state);
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
      <Navbar/>
      Userdashboard
    </div>
  )
}

export default Userdashboard