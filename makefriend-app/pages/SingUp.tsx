import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './api/FireBase';
function SingUp() {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
      // sessionStorage.setItem('Token', res.user.accessToken);
      // router.push('/home');
    });
  };
  return (
    <div>
      <div>SingUp</div>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
      ></input>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(password);
        }}
      ></input>
      <button onClick={signUp}>submit</button>
    </div>
  );
}

export default SingUp;
