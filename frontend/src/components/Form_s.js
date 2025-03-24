import React, { useState,useEffect } from 'react'
import '../components/Form.css'
import { useSpearpartsContext } from '../hook/useSpearpartsContext';

function Form_s({name,position}) {
    const {spearparts,dispatch2}=useSpearpartsContext()
    const [mech,setMech]=useState('');
    const [employee,setEmp]=useState(name);
    const [designation,setDes]=useState(position);
    const [error,setError]=useState(null)
    const [mechid, setMechid]=useState('');
    const [remark, setRemark]=useState('');
    const [partname,setPartname]=useState('');
    const [urgency,setUrgency]=useState('');
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
        event.preventDefault()
        const spearparts={mech,employee,designation,mechid,partname,urgency,remark};
        const response= await fetch('/api2'+'/api/spearparts',{
            method: 'POST',
            body: JSON.stringify(spearparts),
            headers: {'Content-type':'application/json'}
        })
        const json = await response.json()
        if (!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log("Create speareparts message sucessfully",json)
            setMech('')
            setUrgency('')
            setMechid('')
            setRemark('')
            setPartname('')
         
            dispatch2({type: 'CREATE_SPEARPART', payload: json})
            
        }

    }
    const handleMech=(event)=>{
        setMech(event.target.value)
        
        fetchData(event.target.value)



       
           
      
        

    }

    const handleMechid= (event)=>{
        
        setMechid(event.target.value)
       
        
    }
    const handleRemark=(event)=>{
        setRemark(event.target.value)
    }
    const handlePart=(event)=>{
        setPartname(event.target.value)
    }
    const handleUrg=(event)=>{
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
           <label id='rep'>{name}</label>
            
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='des'>Designation</label>
        </div>
        <div className="col-75">
            <label id='rep'>{position}</label>
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
            <label id='part'>Part Name</label>
        </div>
        <div className="col-75">
            <input id='part-input' value={partname} onChange={handlePart} />
        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='urgency'>Urgency</label>
        </div>
        <div className="col-75">
            <select id='urgency-input' value={urgency} onChange={handleUrg} defaultValue={"within a day"}>
                <option value=""></option>
                <option value="within a day">within a day</option>
                <option value="within few days">within few days</option>
                <option value="within a week">within a week</option>
                <option value="within few weeks">within few weeks</option>
                <option value="within a month">within a month</option>
                <option value="within few months">within few months</option>
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

export default Form_s