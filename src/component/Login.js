import React, { useState } from "react";

import "./myStyle.css";

const Login = () => {
  //Form State
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  //On Form Submit

  const handleSubmit = (event) => {
    //Prevent default behaviour of browser( ie !reload)
    event.preventDefault();

    //Validate
    const errors = validate();
    setErrors(errors);
    //If no error
    // if (Object.keys(errors).length === 0) {
    //   alert("Done");
    // }
  };

  //Validation function

  const validate = () => {
    //Create Ojb to store errors
    const error = {};

    if (!username){
        error.username="Username is required";
    }else {
        error.username=""
    }

    if (!email){
        error.email="Email is required";
    }else if (!/\S+@\S+/.test(email)){
        error.email="Email is incorrct";
    }
    else{
        error.email=""

  
  };

  if (password.length <8){
        error.password="Password is incorrect";
    }
    else{
        error.password=""

  
  };

  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error"> {errors.email}</div>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
