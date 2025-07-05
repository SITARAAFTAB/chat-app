// import React from 'react';
// import WhatsAppChatbot from './WhatsAppChatbot';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div className="App">
//       <WhatsAppChatbot />
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import WhatsAppChatbot from './WhatsAppChatbot';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './FireBase';


function App() {

  const [user , setUser] = useState(null);

  useEffect(()=>{

    const result = onAuthStateChanged(auth,(currentUser)=>{

      if(currentUser){
        setUser(currentUser);
      }else{
        setUser(null);
      }
                                                    
    })

  },[]);
 
  return (
    <div>
     {user? (<WhatsAppChatbot />):(<div><Register/></div>)}
    </div>
  )
}

export default App
