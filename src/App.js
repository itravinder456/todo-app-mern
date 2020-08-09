import React, { useEffect } from 'react';
import Main from './components/coreComponents/Main';
import Routes from './components/routes/routes';
import Toaster, { toastMessage } from './components/tools/Toaster';
import { intiateUserSocketConnection, getSocketIOInstance } from './components/coreComponents/SocketIO';

function App() {
  useEffect(() => {
    intiateUserSocketConnection();
    let socket = getSocketIOInstance();
    socket.on("Todo", (message) => {
      toastMessage(message.message, "info");
    });
  }, []);
  return (
    <React.Fragment>
      <Routes />
      <Toaster />
    </React.Fragment>
  );
}

export default App;
