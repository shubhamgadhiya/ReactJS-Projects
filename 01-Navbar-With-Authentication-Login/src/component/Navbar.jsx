import {Link, useLocation} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {auth} from '../firebase/firebase';
import { toast } from 'react-toastify';

function Navbar() {
  const location = useLocation();
  const current_location = location.pathname;

  console.log('current_location', current_location);

  const [user, setUser] = useState(null);
  const [profileList, setProfileList] = useState(false);
const [hamburger, setHamburger] = useState(false);

console.log('profileList',profileList )
  console.log('user', user);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async user => {
      console.log('user', user);
      setUser(user);
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const hanleLogout = async () => {
        
    console.log('auth',auth )
    await auth.signOut();
    setProfileList(!profileList)
    toast.success("User Logout Successfully", {position: "top-center"});
  };

  const toggleHamburger = () => {
    setHamburger(!hamburger);
    setProfileList(false)
  };
  
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">LOGO </Link>
          
        </div>
      
          <div className="hamburger" onClick={toggleHamburger}>
        <i className={`fas ${hamburger ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <div className={`menu ${hamburger ? 'active' : ''}`}>
      
        <ul>
          <li>
            <Link to="/" className={current_location === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={current_location === '/about' ? 'active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className={current_location === '/contactus' ? 'active' : ''}>
              Contact Us
            </Link>
          </li>
          {!user && (
            // <img className='profile' src={user.photoURL} alt=""/>
            <>
              <li>
                <Link
                  to="/login"
                  className={current_location === '/login' ? 'active' : ''}>
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className={current_location === '/register' ? 'active' : ''}>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
        </div>
        {user && (
          <>
            <div className="profile">
              <img
                className="profile-img cursor-pointer"
                src={user?.photoURL|| "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s"}
                alt="img"
                onClick={() => (setProfileList(!profileList) , setHamburger(false))}
              />
          
{profileList && (
  <>
  <div className='pl'>
  
 <ul className="profile-list">
 <li title='Profile'onClick={()=>  setProfileList(!profileList)} > <Link to="/profile"> Profile </Link></li>
 <li title="Logout" onClick={hanleLogout}> <Link to="/login">Logout</Link></li>
</ul>

</div>
  </>
)}
  </div>
           
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
