import React, { useState } from 'react'
import '../components/Form.css'
import { useLoginsContext } from '../hook/useLoginsContext';

function Form_s() {
    const {dispatch5}=useLoginsContext()
    const [error,setError]=useState(null)
    const [firstname,setFirstname]=useState('');
    const [surename,setSurename]=useState('');
    const [email,setEmail]=useState('');
    const [pword, setPword]=useState('');
    const [address, setAddress]=useState('');
   
    const [admin,setAdmin]=useState('');
    const [department,setDep] =useState('')
    const [designation,setDes] =useState('')
    const handleSubmit=async (event)=>{

        event.preventDefault()
        const login={firstname,surename,email,department,pword,address,designation,admin};
        const response= await fetch('/api4'+'/login2',{
            method: 'POST',
            body: JSON.stringify(login),
            headers: {'Content-type':'application/json'}
        })
        const json = await response.json()
        if (!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log("Create new login message sucessfully",json)
            setFirstname('')
            setSurename('')
            setEmail('')
            setPword('')
            setAddress('')
            setAdmin('')
            setDep('')
            setDes('')
            dispatch5({type: 'CREATE_LOGIN', payload: json})
            
        }
    }
    const handleFirstname=(event)=>{
        setFirstname(event.target.value)
    }
    const handleSurename=(event)=>{
        setSurename(event.target.value)
    }
    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }
    const handlePword=(event)=>{
        setPword(event.target.value)
    }
    const handleAddress=(event)=>{
        setAddress(event.target.value)
    }
 
    const handleAdmin=(event)=>{
        setAdmin(event.target.value)
    }
    const handleDep=(event)=>{
        setDep(event.target.value)
    }
    const handleDes=(event)=>{
        setDes(event.target.value)
    }

   
    return (
    <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-25">
            <label id='fname'>First Name</label>
        </div>
        <div className="col-75">
            <input id='fname-input' value={firstname} onChange={handleFirstname} />
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='sname'>Sure Name</label>
        </div>
        <div className="col-75">
            <input id='sname-input' value={surename} onChange={handleSurename} />
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='email'>Email</label>
        </div>
        <div className="col-75">
            <input id='email-input' value={email} onChange={handleEmail} type='email' />

        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='dep'>Department</label>
        </div>
        <div className="col-75">
            <select id='dep-input' value={department} onChange={handleDep}> 
                <option value=""></option>
                <option value="Weathering">Weathering</option>
                <option value="Rolling">Rolling</option>
                <option value="fermentation">fermentation</option>
                <option value="drier">drier</option>
                <option value="fernace">fernace</option>
                <option value="grading">grading</option>
                <option value="color soarter">color soarter</option>
                <option value="Maintainers">Maintiners</option>
     
            
            </select>
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='pword'>Password</label>
        </div>
        <div className="col-75">
            <input id='pword-input' value={pword} onChange={handlePword} />
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='address'>Address</label>
        </div>
        <div className="col-75">
            <textarea id='address-input' value={address} onChange={handleAddress} style={{height:'200px'}} />
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='position'>designation</label>
        </div>
        <div className="col-75">
            <select id='pos-input' value={designation} onChange={handleDes}> 
                <option value=""></option>
                <option value="Executive">Executive</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Manager">Manager</option>
                <option value="Engineer">Engineer</option>

     
            
            </select>
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='admin'>Admin Privilage</label>
        </div>
        <div className="col-75">
        <select id='admin-input' value={admin} onChange={handleAdmin}> 
                <option value=""></option>
                <option value='1'>Yes</option>
                <option value='0'>No</option>
           
        </select>

        </div>
        </div>
            <br></br>
            <div className="row">
            <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}

export default Form_s