import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url:""
  });

  const handleAvatar = e => {
    if(e.target.files[0]){
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0])
    });
   }  
  };
  const handleLogin = e=>{
    e.preventDefault()
    toast.warn(" Hello")
  }
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="signin-email" />
          <input type="password" placeholder="Password" name="signin-password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || './avatar.png'} alt="Avatar" />
            Upload an image
          </label>
          <input type="file" id="file" style={{ display: 'none' }} onChange={handleAvatar} />
          <input type="text" placeholder="Username" name="signup-username" />
          <input type="email" placeholder="Email" name="signup-email" />
          <input type="password" placeholder="Password" name="signup-password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
