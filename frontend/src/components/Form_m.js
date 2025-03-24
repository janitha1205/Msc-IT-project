import { useState } from 'react';
import React from 'react'
import { useMechinesContext } from '../hook/useMechinesContext';

function Form_m({name1,position}) {
        const {dispatch1}=useMechinesContext()
        const [error,setError]=useState(null)
        const [m_name,setM_name]=useState('');
        const [mid,setMid]=useState('');
        const [model,setModel]=useState('');
        const [name, setName]=useState(name1);
        const [department,setDep] =useState('')
        const [designation,setDes] =useState(position)
        const [maxoutput,setMaxoutput]=useState('');
        const handleSubmit=async (event)=>{
            event.preventDefault()
            const mechine={m_name,mid,model,name,department,designation,maxoutput};
            const response= await fetch('/api5'+'/api/mechine',{
                method: 'POST',
                body: JSON.stringify(mechine),
                headers: {'Content-type':'application/json'}
            })
            const json = await response.json()
            if (!response.ok){
                setError(json.error)
            }
            if(response.ok){
                setError(null)
                console.log("Create mechine entry sucessfully",json)
                setM_name('')
                setMid('')
                setDep('')
                setModel('')
                setMaxoutput('')
                
             
                dispatch1({type: 'CREATE_MECHINE', payload: json})
                
            }
    
        }
        const handlemname=(event)=>{
            setM_name(event.target.value)
        }
        const handlemaxoutput=(event)=>{
            setMaxoutput(event.target.value)
        }
    
        const handlemid=(event)=>{
            setMid(event.target.value)
        }
        const handleDep=(event)=>{
            setDep(event.target.value)
        }
        const handlemodel=(event)=>{
            setModel(event.target.value)
        }

        return (
                <div className="container">
                <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-25">
                    <label id='mname'>Mechine Name</label>
                </div>
                <div className="col-75">
                    <input id='mname-input' value={m_name} onChange={handlemname} />
                </div>
                </div>
                <div className="row">
                <div className="col-25">
                    <label id='mid'>Mechine ID</label>
                </div>
                <div className="col-75">
                    <input id='mid-input' value={mid} onChange={handlemid} />
                </div>
                </div>
                <div className="row">
                <div className="col-25">
                    <label id='model'>Model</label>
                </div>
                <div className="col-75">
                    <input id='model-input' value={model} onChange={handlemodel}  />

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
                            <option value="compressors">compressors</option>
                            <option value="air ventilation machineries">air ventilation machineries</option>
                            <option value="office equipments">office equipments</option>
                        
                    
                    </select>
                </div>
                </div>

                <div className="row">
                <div className="col-25">
                    <label id='addername'>Name of the authority</label>
                </div>
                <div className="col-75">
                    <label id='addername-input'>{name}</label>
                </div>
                </div>
                <div className="row">
                <div className="col-25">
                    <label id='position'>designation</label>
                </div>
                <div className="col-75">
                    <label id='pos-input'>{designation}</label > 
                        
                </div>
                </div>
                <div className="row">
                <div className="col-25">
                    <label id='maxout'>Maximum Output</label>
                </div>
                <div className="col-75">
                    <input id='maxout-input' value={maxoutput} onChange={handlemaxoutput} type='number'/>
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

export default Form_m