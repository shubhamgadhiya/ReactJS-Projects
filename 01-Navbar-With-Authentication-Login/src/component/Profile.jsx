import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';


function Profile() {

    const [user, setUser] = useState("");
        
    console.log('user',user )
    const fetchUserData = async () => {
            
      console.log('auth',auth )
        auth.onAuthStateChanged(async user => {
          console.log('user', user);
        if(user){

          const docref = doc(db, "users", user?.uid);
          const data = await getDoc(docref);
          
          console.log('data',data )
          if(data.exists()) {
            setUser(data.data());
            console.log('data', data.data() )
          }
          else{
            setUser(user)
            
          }
        }
        });
      };
      useEffect(() => {
        fetchUserData();
      }, []);

  return (
    <div>
     <b> Email:</b> {user.email} <br/>
     <b> Full Name: </b>   {user.displayName || `${user.firstName} ${user.lastName}`}
    </div>
  )
}

export default Profile
