import React from 'react'
import '../styles.css/register.css'
import '../javascript/register.js';
const Register = () => {
  return <section className='reg'>
     <div className="container">
        <div className="form-box">
          <form action name="Formfill" onsubmit="return validation()">
            <h2>Register</h2>
            <p id="result" />
            <div className="input-box">
            <i class="ri-user-fill"></i>
              <input type="text" name="Username" placeholder="Username" />
            </div>
            <div className="input-box">
            <i class="ri-mail-fill"></i>
              <input type="email" name="Email" placeholder="E-mail" />
            </div>
            <div className="input-box">
            <i class="ri-lock-fill"></i>
              <input type="password" name="Epassword" placeholder="Enter Password" />
            </div>
            <div className="input-box">
            <i class="ri-lock-fill"></i>
              <input type="password" name="Cpassword" placeholder="Confirm Password" />
            </div>
            <div className="button">
              <input type="submit" className="btn" onclick="validation()" defaultValue="Register" />
            </div>
            <div className="group">
              <span><a href="https://support.google.com/">Forget-Password</a></span>
              <span><a href="login.html">Login</a></span>
            </div>
          </form>
        </div>
        <div className="popup" id="popup">
          <ion-icon name="checkmark-circle-outline" />
          <h2>Thank You !!</h2>
          <p>You are registered successfully.</p>
          <p>Thanks 😁</p>
          <a href="login.html"><button onclick="CloseSlide()">OK</button></a>
        </div>
      </div>
  </section>
}

export default Register