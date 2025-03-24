import React ,{useState } from 'react'
import '../components/config'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from "react-router-dom";
function Login() {
  const [email,SetEmail]=useState('')
  const [password,SetPassword]=useState('')
  let navigate = useNavigate();
  function handleSubmit(event){
    event.preventDefault();
    axios.post('/api4'+'/login', {email,password})
    .then(res => {console.log(res.data[0].First_Name)
      localStorage.setItem('firstname', res.data[0].First_Name)
      localStorage.setItem('surename', res.data[0].Sure_Name)
      localStorage.setItem('admin',res.data[0].IsAdmin)
      localStorage.setItem('position',res.data[0].Designation)
      if((email===res.data[0].Email)){
        navigate(`/dashboard`)
      }else{
        alert("1 Username/Password is incorrect.")
      };
    } )
    .catch(err => {
      console.log(err)
      alert("2 Username/Password is incorrect.")
    
    });
    
  }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
      <div className='p-3 bg-white w-25'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder='Enter Email Address' className='form-control'
            onChange={e=>SetEmail(e.target.value)}
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type="password" placeholder='Enter password' className='form-control'
              onChange={e=>SetPassword(e.target.value)}></input>

          </div>
          <button className='btn btn-success'>Login</button>


        </form>




      </div>




    </div>
  )
}

export default Login