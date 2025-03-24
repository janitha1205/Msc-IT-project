import React, { useState } from 'react'
import '../components/Form.css'
import { useBreakdownsContext } from '../hook/useBreakdownsContext'


function Form({name,position}) {
    const {dispatch}=useBreakdownsContext()
    const [mech,setMech]=useState('');
    const [employee,setEmp]=useState(name);
    const [designation,setDes]=useState(position);
    const [mechid, setMechid]=useState('');
    const [remark, setRemark]=useState('');
    const [error, setError]=useState(null);
    const [urgency,setUrgency]=useState('')
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
    const handleSubmit= async (event)=>{
        event.preventDefault()
        const breakdown={mech,employee,designation,mechid,urgency,remark};
        const response= await fetch('/api1'+'/api/breakdowns',{
            method: 'POST',
            body: JSON.stringify(breakdown),
            headers: {'Content-type':'application/json'}
        })
        const json = await response.json()
        if (!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log("Create breakdown message sucessfully",json)
            setMech('')
            setUrgency('')
            setMechid('')
            setRemark('')
         
            dispatch({type: 'CREATE_BREAKDOWN', payload: json})
            
        }


    }
    const handleMech=(event)=>{
        setMech(event.target.value)
        fetchData(event.target.value)
    }
 
    const handleMechid=(event)=>{
        setMechid(event.target.value)
    }
    const handleRemark=(event)=>{
        setRemark(event.target.value)
    }
    const handleUrgency=(event)=>{
        setUrgency(event.target.value)
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
                <option value="fernace">fernace</option>
                <option value="grading">grading</option>
                <option value="color soarter">color soarter</option>
                <option value="compressors">compressors</option>
                <option value="air ventilation machineries">air ventilation machineries</option>
                <option value="office equipments">office equipments</option>
            </select>
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='rep'>Reporter</label>
        </div>
        <div className="col-75">
            <label id='rep-input'>{name}</label>
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='des'>Designation</label>
        </div>
        <div className="col-75">
            <label id='des-input' >{position}</label>
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
            <label id='urgency'>How Urgent</label>
        </div>
        <div className="col-75">
            <select id='urgency-input' value={urgency} onChange={handleUrgency}> 
                <option value=""></option>
                <option value="very high"> very high</option>
                <option value="high">high</option>
                <option value="essential">essential</option>
                <option value="low">low</option>
                <option value="very low">very low</option>
                
            </select>
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='rem'>Remark</label>
        </div>
        <div className="col-75">
            <textarea id='rem-input' value={remark} onChange={handleRemark} style={{height:'200px'}} />
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

export default Form