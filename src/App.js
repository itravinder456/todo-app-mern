import React from 'react';
import Main from './components/coreComponents/Main';
import Routes from './components/routes/routes';
import Toaster from './components/tools/Toaster';

function App() {
  return (
    <div >
     
     {/* <Main/> */}
     <Routes/>
     <Toaster/>
    </div>
  );
}

export default App;
