import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useLoginsContext } from '../hook/useLoginsContext'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Form_L from '../components/Form_L'
import StickyHeadTable from '../components/StickyHeadTable2';
function Admin() {
  let ob=String(localStorage.getItem("firstname"));
  let ob2=String(localStorage.getItem("surename"));
  let ad =String(localStorage.getItem("admin"));
  let pos =String(localStorage.getItem("position"));
  let name=ob+ob2


  const {logins,dispatch5} =useLoginsContext();

  const [submitClicked, setSubmitClicked] = useState(false);


  useEffect(() => {
    const fetchLogins = async () => {
      const response = await fetch('/api4'+'/login3',{
        method: 'POST'
      })
      const json = await response.json()
    
      
      if (response.ok) {
        
        dispatch5({type : 'SET_LOGINS', payload : json})
        setSubmitClicked(true)

      
      
      }
    }

    fetchLogins()
  }, [])
 
  //First_Name,Sure_Name,Email,Password,Address,Department,Designation,IsAdmin
  const colmn=[{
    name:'First Name',
    selector: row => row.First_Name,
    sortable:true

  },{
    name:'SureName',
    selector: row => row.Sure_Name,
    sortable:true
  },{
    name:'Email',
    selector: row => row.Email,
    sortable:true
  },{
    name:'Address',
    selector: row => row.Address,
    sortable:true
  },{
    name:'Department',
    selector: row => row.Department,
    sortable:true
  },{
    name:'Designation',
    selector: row => row.Designation,
    sortable:true
  },{
    name:'Admin Privilage',
    selector: row => row.IsAdmin,
    sortable:true
  }];
  


  
  if (ob !=='undefined') {
    if(ob !=='null'){
       if(ad!=='0'){

          return (
            <div>
            <Navbar admin_p={ad}/>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh', backgroundColor: '#F5F5F5' }}>
            {/* Sidebar */}
            <div style={{ flexGrow: 0, width: '344px', height: '100%' }}>

            </div>

            {/* Main Content */}
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '20px', height: '100%' }}>
              {/* Header */}
              <div style={{ flexGrow: 0, height: 'auto', marginBottom: '20px' }}>
                <Header userName={name} page="Login Management System"/>
              </div>

              {/* form */}
              <div >
                <Form_L></Form_L>
              </div>

              {/* Recent Information */}
              <div style={{ flexGrow: 1 }}>
              {submitClicked &&(<StickyHeadTable colums={colmn} data={logins} apin='/api4' api='/Login4/' dis='DELETE_LOGIN'/>)}

              </div>
            </div>
          </div>
          </div>
          )
        }else{
            return <h2>not have privillage to see</h2>
        }
        }else{
          return <h2>Login Error</h2>
        }
        }else{
          return <h2>Login Error</h2>
        }
}

export default Admin