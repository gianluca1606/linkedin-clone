import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    alert("test");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.profileUrl,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <img src='https://meedia.de/wp-content/uploads/2020/03/Linkedin_logo.jpg' alt='' />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full name (required if registering)'
          type='text'
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder='Profile pic URL (optional)'
          type='text'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          type='email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className='login_register' onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
