import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
const Navbar = () => {
  const {currentUser}=useContext(AuthContext);
  return (
    <div className='navbar'>
      <span className='logo'>Let's Chat</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt=''/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
};
//'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrB8e-SV99ORcO1Mg2NdQrDgtlvAFVpI4ooA&usqp=CAU'
export default Navbar
