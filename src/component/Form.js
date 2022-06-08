import React from "react";
import "./Form.css"

import {useHistory} from "react-router-dom"

const Login_Page = () => {

    let history = useHistory();

  return (
    <>
      <div className="parent">
        <form action="">
          <div>
            <h1>Work Log System</h1>
            <input
              className="email"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>

          <br />

          <div>
            <input
              className="pass"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <br />
          <br />
          <button className="btn" type="submit" onClick={ () =>{history.push("Home")}}>
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login_Page;
