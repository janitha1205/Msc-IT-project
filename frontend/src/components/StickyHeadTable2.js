import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component'
import { useLoginsContext } from '../hook/useLoginsContext';


function StickyHeadTable({colums,data,apin,api,dis}) {
  const {dispatch5}=useLoginsContext()
  
  const [record, setRecord]=useState(data);
  const [rows,SetRows]=useState('')
  function handleFilter(event){
    const newData=data.filter(row => {
      //{firstname,surename,email,department,pword,address,designation,admin}
      return row.Designation.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.Address.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.Department.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.Email.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.Sure_Name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.First_Name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())})
      setRecord(newData);
  }
  const handleDelete=async (event)=>{
    for(var i=0;i<(rows.length);i++){
        const response= await fetch(apin+api+rows[i],{
          method: 'POST'
        })
        const json =await response.json()
        if (response.ok){
          dispatch5({type: dis,payload: json})
          
        }
      }


  }
  const handleChange=(event)=>{
    
    const obj = Object.entries(event.selectedRows)
    var arr=[]
    var i=0
    obj.forEach(([key, value]) => {
 
      arr[i]=value['ID']
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