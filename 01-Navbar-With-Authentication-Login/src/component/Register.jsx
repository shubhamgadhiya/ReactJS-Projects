import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {setDoc, doc} from 'firebase/firestore';
import {auth, db} from '../firebase/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { toast } from 'react-toastify';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      const user = data.user;
      if (user) {
        await setDoc(doc(db, 'users', data.user.uid), {
          email: data.user.email,
          firstName: firstName,
          lastName: lastName,
          password: password,
          photo: '',
        });
      }
      // await auth.signOut();
      toast.success("User Registered Successfully", {position: "top-center"});
      navigate('/login');
    } catch (err) {
      toast.error(err.message, {position: "top-center"});
    }
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <h3>Register Here</h3>
        <label for="FirstName">FirstName</label>
        <input
          type="text"
          value={firstName}
          required
          onChange={e => setFirstName(e.target.value)}
          autoComplete="off"
          placeholder="Enter Your FirstName"
          id="firstname"
        />

        <label for="LastName">LastName</label>
        <input
          type="text"
          value={lastName}
          required
          onChange={e => setLastName(e.target.value)}
          autoComplete="off"
          placeholder="Enter Your LastName"
          id="lastname"
        />

        <label for="Email">Email</label>
        <input
          type="email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          autoComplete="off"
          placeholder="Enter Your Email"
          id="email"
        />

        <label for="password">Password</label>
        <input
          type="password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          autoComplete="off"
          placeholder="Enter Your Password"
          id="password"
        />

        <button type="submit" className="login-button">
          Register
        </button>

        <p>
          Already have an account?
          <span className="fw-bold cursor-pointer">
            {' '}
            <Link className="login-link" to="/login">
              Login
            </Link>{' '}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
