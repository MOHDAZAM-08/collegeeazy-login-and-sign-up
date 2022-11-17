import React from 'react'
import Logo from './Logo'
import { useState } from 'react'

export default function LoginPage() {


  const [userRegistration, setUserRegistration] = useState({
    EnrollmentNo: "",
    passward: ""
  });

  const [Data, setData] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { ...userRegistration, id: Date().getTime().toString() }

    setData([...Data , newData])
  }
  return (
    <>
      <div className="column">
        <form action="login" onSubmit={handleSubmit}>
          <div className='container'>
            <div className="heading">
              <h1>Login </h1>
            </div>
            <input type="text" className="form-control"
              value={userRegistration.EnrollmentNo}
              onChange={handleInput}
              id="EnrollmentNo" autoComplete="off" name='EnrollmentNo' placeholder="EnrollmentNo" />

            <input type="Password" className="form-control"
              value={userRegistration.password}
              onChange={handleInput}
              id="floatingInput" autoComplete="off" name='password' placeholder="Password" />


            <div className="button">
              <button className="btn " type="submit">Login</button>
            </div>

          </div>
        </form>
        {/* <div> <Logo /></div> */}
      </div>
    </>
  )
}
