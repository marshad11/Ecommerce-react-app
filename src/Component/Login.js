import React, { useState } from "react";

const Login = () => {

  var [email, setEmail] = useState("")
  var [pwd, setPwd] = useState("")

  var handleSubmit = (e) => {
    e.preventDefault()

    var data = {
      email,
      pwd
    }

    console.log(data);
  }

  return (
    <div className="container mt-5">
      <h1 className="display-1 text-center text-muted">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e)=>{setPwd(e.target.value)}}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="d-grid gap-2 mb-5">
          <button type="submit" className="btn btn-outline-secondary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
