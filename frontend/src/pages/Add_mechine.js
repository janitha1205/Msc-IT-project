import React,{useEffect,useState} from 'react'
import { useMechinesContext } from '../hook/useMechinesContext'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Form_m from '../components/Form_m'
import StickyHeadTable from '../components/StickyHeadTable3';
function Add_mechine() {
  let ob=String(localStorage.getItem("firstname"));
  let ob2=String(localStorage.getItem("surename"));
  let ad =String(localStorage.getItem("admin"));
  let position =String(localStorage.getItem("position"));
  let name=ob+ob2
  
  
  const {mechines,dispatch1} =useMechinesContext();
  
  const [submitClicked, setSubmitClicked] = useState(false);
  
  
   
  
    useEffect(() => {
      const fetchMechines = async () => {
        const response = await fetch('/api5'+'/api/mechine')
        const json = await response.json()
        
       // alert(Object.keys(Object.values(json)[0])[0])
        if (response.ok) {
          
          dispatch1({type : 'SET_MECHINES', payload : json})
          setSubmitClicked(true)
       
          
  
        
        
        }
      }
  
      fetchMechines()
    }, [])
    
   
  //  m_name,mid,model,name,department,designation
 
  const colmn=[
    {
      name:'ID',
      selector: row => row._id,
      sortable:true
    },
    {
      name:'Time',
      selector: row => row.createdAt,
      sortable:true
    },
    {
      name:'Mechine Name',
      selector: row => row.m_name,
      sortable:true
  
    },
    {
    name:'Mechine ID',
    selector: row => row.mid,
    sortable:true

  }, 
   {
    name:'Model',
    selector: row => row.model,
    sortable:true
  }
  ,{
    name:'Added by',
    selector: row => row.name,
    sortable:true
  },
  {
    name:'Department',
    selector: row => row.department,
    sortable:true
  },
  {
    name:'Designation',
    selector: row => row.designation,
    sortable:true
  },
  {
    name:'Maxium output',
    selector: row => row.maxoutput,
    sortable:true
  }
];
  if((ob !=='undefined')) {
    if(ob !=='null'){
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
                <Header userName={name} page="Mechines entry form "/>
              </div>

              {/* form */}
              <div>
              <Form_m name1={name} position={position}></Form_m>
              </div>

              {/* Recent Information */}
              <div style={{ flexGrow: 1 }}>
              {submitClicked &&<StickyHeadTable colums={colmn} data={mechines} apin='/api5' api='/api/mechine/' dis='DELETE_MECHINE'/>}
              </div>
            </div>
          </div>
          </div>
        )
      }else{
        return <h2>Login Error</h2>
      }
  }else{

        return <h2>Login Error</h2>
  }
}

export default Add_mechine