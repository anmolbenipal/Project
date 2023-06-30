import React from 'react';
import '../styles.css/login.css'
import {Button} from "react-bootstrap"


const Login = () => {
  return <section className='log'>
    <div className="container">
        <div className="form-box">
          <form action name="Formfill" onsubmit="return validation()">
            <h2>Login </h2>
            <p id="result" />
            <div className="input-box">
              <i className="bx bxs-envelope" />
              <input type="email" name="Email" placeholder="E-mail" />
            </div>
            <div className="input-box">
              <i className="bx bxs-lock-alt" />
              <input type="password" name="Epassword" placeholder="Enter Password" />
            </div>
            <Button className='btn'>Login</Button>
          </form>
        </div>
      </div>
  </section>
}

export default Login