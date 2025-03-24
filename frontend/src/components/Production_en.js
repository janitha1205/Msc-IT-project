
import React, { useState } from 'react'
import '../components/Form.css'
import { useDataentrysContext } from '../hook/useDataentrysContext';

function Production_en({reporter,position}) {
    const {dispatch4}=useDataentrysContext()
    const [mech,setMech]=useState('');
    const [employee,setEmp]=useState(reporter);
    const [designation,setDes]=useState(position);
    const [mechid, setMechid]=useState('');
    const [actual, setActual]=useState('');
    const [remark, setRemark]=useState('');
    const [error,setError]=useState(null)
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
    const handleSubmit=async(event)=>{
        alert(mech+employee+designation+mechid+actual+remark)
        event.preventDefault()
        const dataentry={mech,employee,designation,mechid,actual,remark};
        const response= await fetch('/api3'+'/api/dataentry',{
            method: 'POST',
            body: JSON.stringify(dataentry),
            headers: {'Content-type':'application/json'}
        })
        const json = await response.json()
        if (!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log("Create dataentry message sucessfully",json)
            setMech('')
            setActual('')
            setMechid('')
            setRemark('')
         
            dispatch4({type: 'CREATE_DATAENTRY', payload: json})
            
        }


    }
    const handleMech=(event)=>{
        setMech(event.target.value)
        fetchData(event.target.value)
        

    }

    const handleMechid=(event)=>{
        setMechid(event.target.value)
        
    }
    const handleActual=(event)=>{
        setActual(event.target.value)
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
            <label id='rep'>Reporter</label>
        </div>
        <div className="col-75">
            <label className='rep'>{employee}</label>

        </div>
        </div>
        <div className="row">
        <div className="col-25">
            <label id='des'>Designation</label>
        </div>
        <div className="col-75">
           <label className='des'>{designation}</label>
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
            <label id='actu'>actual output</label>
        </div>
        <div className="col-75">
            <input id='actu-input' value={actual} onChange={handleActual} type="number"/>
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



export default Production_en


