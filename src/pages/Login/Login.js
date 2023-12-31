import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password)
    try {
      const response = await fetch("http://localhost:5000/login-user", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      })

      const data = await response.json()
      console.log(data, "userLogin")
      if (data.status == "ok") {
        alert("login successful")
        window.localStorage.setItem("token", data.data)
        window.localStorage.setItem("loggedIn", true)
        window.location.href = "./userDetails"
      }else{
        alert("login failed try again") 
      }
      
    } catch (error) {
      console.error("Error during login:", error);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
};

export default Login;
