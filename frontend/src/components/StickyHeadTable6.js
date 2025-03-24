import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component'
import { useTargetsContext } from '../hook/useTargetsContext';

function StickyHeadTable({colums,data,apin,api,dis}) {
  const {dispatch3}=useTargetsContext()
  
  const [record, setRecord]=useState(data);
  const [rows,SetRows]=useState('')
  function handleFilter(event){
    const newData=data.filter(row => {
      //{mech,assign,reported,designation,targets,mechid,remark}
      return row.mech.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.assign.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.reported.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.designation.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.mechid.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.remark.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())})
      setRecord(newData);
  }
  const handleDelete=async (event)=>{
    for(var i=0;i<(rows.length);i++){
        const response= await fetch(apin+api+rows[i],{
          method: 'DELETE'
        })
        const json =await response.json()
        if (response.ok){
          dispatch3({type: dis,payload: json})
          
        }
      }


  }
  const handleChange=(event)=>{
    
    const obj = Object.entries(event.selectedRows)
    var arr=[]
    var i=0
    obj.forEach(([key, value]) => {
 
      arr[i]=value['_id']
      i++
     
    })
    
    console.log(arr)
    SetRows(arr)
   
  }
  return (
    <div className='container mt-5'>
      <div className='text-end'>
        <input type='text' onChange={handleFilter} placeholder='Search'>
        </input>
        <Button onClick={handleDelete}>Delete</Button>
      </div>

      <DataTable
        columns={colums}
        data={record}
        selectableRows
        fixedHeader
        pagination
        onSelectedRowsChange={handleChange}>
      </DataTable>
    </div>
  )
}

export default StickyHeadTable