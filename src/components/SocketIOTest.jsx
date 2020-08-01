import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let socket;
const ENDPOINT = "https://todo-app-complete-mern.herokuapp.com/";

socket = io(ENDPOINT); 

const SocketIOTest = ({ location }) => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState("");
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    socket.on("todoCreated", (message) => {
      console.log("message", message);
    });
  }, [ENDPOINT]);

  const sendMessage = (event) => {
    event.preventDefault();
    let user = {
      user: name,
      action: "Todo was created",
      room: "testRoom",
    };
    socket.emit("todoCreated", user, (error) => {
      if (error) {
        alert(error);
      }
    });
  };

  return (
    <div className="outerContainer">
      <div className="container panel transparent"></div>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={sendMessage}>Submit</button>
    </div>
  );
};

export default SocketIOTest;
