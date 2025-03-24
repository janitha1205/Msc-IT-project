

import React, { useState } from 'react'
import '../components/Form.css'
import { useTargetsContext } from '../hook/useTargetsContext'
const Target=({position,name})=> {
    const {dispatch3}=useTargetsContext()
    const [error, setError]=useState(null);
    const [mech,setMech]=useState('');
    const [assign,setAssign]=useState('');
    const [reported,setRep]=useState(name);
    const [designation,setDes]=useState(position);
    const [targets, setTarget]=useState('');
    const [mechid, setMechid]=useState('');
    const [remark, setRemark]=useState('');
    const [selectedOption, setSelectedOption] = useState();
    const [newUserLists, setNewUserLists] =useState([]);
    const fetchData = async (dep) => {
                await fetch('/api5'+'/api/mechine')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    let arr=[]
                    let k=0
                    for(let i=0;i<data.length;i++){
                        if (data[i].department===dep){
                            arr[k]=data[i]
                            k=k+1
                        }
                    }
                    setNewUserLists(arr)
                })
            }
    const handleSubmit=async (event)=>{
        alert(mech+assign+targets+mechid+remark)
        const target={mech,assign,reported,designation,targets,mechid,remark};
        const response= await fetch('/api6'+'/api/targets',{
            method: 'POST',
            body: JSON.stringify(target),
            headers: {'Content-type':'application/json'}
        })
        const json = await response.json()
        if (!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log("Create target message sucessfully",json)
            setMech('')
            setAssign('')
            setTarget('')
            setMechid('')
            setRemark('')
         
            dispatch3({type: 'CREATE_TARGET', payload: json})
            
        }


    }
    const handleMech=(event)=>{
        setMech(event.target.value)
        fetchData(event.target.value)
    }

    const handleAssign=(event)=>{
        setAssign(event.target.value)
    }
    const handleTarget=(event)=>{
        setTarget(event.target.value)
    }
    const handleMechid=(event)=>{
        setMechid(event.target.value)
    }
    const handleRemark=(event)=>{
        setRemark(event.target.value)
    }



   
    return (
    <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-25">
            <label id='mn'>Mechine Name</label>
        </div>
        <div className="col-75">
            <select id='mn-input' value={mech} onChange={handleMech}> 
                <option value=""></option>
                <option value="Weathering">Weathering</option>
                <option value="Rolling">Rolling</option>
                <option value="fermentation">fermentation</option>
                <option value="drier">drier</option>
                <option value="grading">grading</option>
                <option value="color soarter">color soarter</option>
            </select>
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='assign'>Assign To</label>
        </div>
        <div className="col-75">
            <select id='assign-input' value={assign} onChange={handleAssign}>
                <option value=""></option>
                <option value="Supervisor">Supervisor</option>
                <option value="Production Executive">Production Executive</option>
            </select>
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='report'>Repoted To</label>
        </div>
        <div className="col-75">
           <label id='reported'>{reported}</label>
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='designation'>designation</label>
        </div>
        <div className="col-75">
            <label id='designation'>{designation}</label>
        </div>
        </div>
       
        <div className="row">
        <div className="col-25">
            <label id='target'>Target</label>
        </div>
        <div className="col-75">
            <input id='target-input' value={targets} onChange={handleTarget} type='number'/>
              
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='mid'>Mechine ID</label>
        </div>
        <div className="col-75">
            <select value={mechid} onChange={handleMechid} >
                <option key=""></option>
                {newUserLists.length > 0 && (newUserLists.map(user => (
                 <option key={user.mid}>{user.mid}</option>)) )}


            </select>
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='remark'>Remark</label>
        </div>
        <div className="col-75">
            <textarea id='remark-input' value={remark} onChange={handleRemark} style={{height:'200px'}} />
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




export default Target