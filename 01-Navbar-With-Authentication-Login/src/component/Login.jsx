import React, {useState} from 'react';
import google from './google.png';
import {Link, useNavigate} from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {auth} from '../firebase/firebase';
import { toast } from 'react-toastify';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User Login Successfully", {position: "top-center"});
      navigate('/');
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
      alert(error.message);
    }

    setEmail('');
    setPassword('');
  };

  const signinwithgoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('result', result)
      toast.success("User Login Successfully", {position: "top-center"});
      navigate('/');
    } catch (error) {
      toast.error(error.message, {position: "top-center"});
    }
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login Here</h3>
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
          Log In
        </button>

        <div class="separator">
          <span>or</span>
        </div>
        <div className="social text-center">
        
          <img
            src={require('./google.png')}
            alt="google"
            className="w-50 cursor-pointer"
            onClick={signinwithgoogle}
          />
        </div>

        <p>
          Don't have an account?{' '}
          <span className="fw-bold cursor-pointer">
            {' '}
            <Link className="login-link" to="/register">
              Register
            </Link>{' '}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
