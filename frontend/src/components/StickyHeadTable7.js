import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component'



function StickyHeadTable({colums,data}) {
 
  
  const [record, setRecord]=useState(data);
  const [rows,SetRows]=useState('')
  function handleFilter(event){
    
    const newData=data.filter(row => {
      //{m_name,mid,model,name,department,designation}
      return row.m_name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.mid.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.model.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.department.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())||row.designation.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())})
      
      setRecord(newData);
  }
  
  
  return (
    <div className='container mt-5'>
      <div className='text-end'>
        <input type='text' onChange={handleFilter} placeholder='Search'>
        </input>
      </div>

      <DataTable
        columns={colums}
        data={record}
      
        fixedHeader
        pagination>
      </DataTable>
    </div>
  )
}

export default StickyHeadTable