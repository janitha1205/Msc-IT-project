import React,{useEffect,useState} from 'react';
import Graph from '../components/Graph';
import '../components/config';
import './Dashboard.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import StickyHeadTable from '../components/StickyHeadTable7';

import { useBreakdownsContext } from '../hook/useBreakdownsContext'
import { useSpearpartsContext } from '../hook/useSpearpartsContext'
import { useTargetsContext } from '../hook/useTargetsContext';
import { useDataentrysContext } from '../hook/useDataentrysContext'
import { useMechinesContext } from '../hook/useMechinesContext';
function Dashboard(){

  let ob=String(localStorage.getItem("firstname"));
  let ob2=String(localStorage.getItem("surename"));
  let name=ob+ob2
  let ad =String(localStorage.getItem("admin"));
  var moment = require('moment');
  
  const {breakdowns,dispatch} =useBreakdownsContext();
  const {data_t,dispatch3} =useTargetsContext();
  const {dataentrys,dispatch4} =useDataentrysContext();
  const {spearparts,dispatch2} =useSpearpartsContext();
  const {mechines,dispatch1} =useMechinesContext();
    
  const [submitClicked, setSubmitClicked] = useState(false);
  const [submitClicked2, setSubmitClicked2] = useState(false); 
       
  const [data2, setData2] = useState('');
  const [label2, setLabel2] = useState('');
  const [gra2,setGra2]=useState(false)
  const [data1, setData1] = useState('');
  const [label1, setLabel1] = useState('');
  const [gra,setGra]=useState(false)
  const [data3, setData3] = useState('');
  const [label3, setLabel3] = useState('');
  const [gra3,setGra3]=useState(false)
  const [data4, setData4] = useState('');
  const [label4, setLabel4] = useState('');
  const [gra4,setGra4]=useState(false)
  
           
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

    const fetchDataentrys = async () => {
      const fetchgra4 =   (data) =>{
        if (data.length!==0){
        function dotProduct(n1, vect)
        {
      
            let n=vect.length
            var product=[]
      
            // Loop for calculate dot product
            for (let i = 0; i < n; i++)
                product[i] = n1*vect[i];
            return product;
        }
        function norm(x){
          var sum=0
          const y=[]
          for (let i = 0; i < x.length; i++){
            sum =sum+Number(x[i]) ;
          }
          
          for (let i = 0; i < x.length; i++){
            y[i] =x[i]/sum ;
          }
          return y

        }
        
        const obj= Object.entries(data)
        
        var arr=[]
        var arr2=[]
        var i=0
        obj.forEach(([key, value]) => {
    
         arr[i]=value['actual']
       
         arr2[i]=value['mechid']
         i++
        
       })
       
       const arrn=norm(arr)
       
       setData4(dotProduct(100,arrn))
       setLabel4(arr2)
       setGra4(true)
      }else{
        setGra4(false)
      }
      
      }
      const response = await fetch('/api3'+'/api/dataentry')
      const json = await response.json()
    
     // alert(Object.keys(Object.values(json)[0])[0])
      if (response.ok) {
        
        dispatch4({type : 'SET_DATAENTRYS', payload : json})
        fetchgra4(json)

      
      
      }
    }

    const fetchTargets = async () => {
      const fetchgra3 =   (data) =>{
        if (data.length!==0){
        function dotProduct(n1, vect)
        {
      
            let n=vect.length
            var product=[]
      
            // Loop for calculate dot product
            for (let i = 0; i < n; i++)
                product[i] = n1*vect[i];
            return product;
        }
        function norm(x){
          var sum=0
          const y=[]
          for (let i = 0; i < x.length; i++){
            sum =sum+Number(x[i]) ;
          }
          
          for (let i = 0; i < x.length; i++){
            y[i] =x[i]/sum ;
          }
          return y

        }
        
        const obj= Object.entries(data)
        
        var arr=[]
        var arr2=[]
        var i=0
        obj.forEach(([key, value]) => {
    
         arr[i]=value['targets']
         arr2[i]=value['mechid']
         i++
        
       })
       const arrn=norm(arr)
       setData3(dotProduct(10,arrn))
       setLabel3(arr2)
       setGra3(true)
      }else{
        setGra3(false)
      }
      
      }
      const response = await fetch('/api6'+'/api/targets')
      const json = await response.json()
    
     // alert(Object.keys(Object.values(json)[0])[0])
      if (response.ok) {
        
        dispatch3({type : 'SET_TARGETS', payload : json})
        fetchgra3(json)

      
      
      }
    }
    
    const fetchSpearparts = async () => {
      const fetchgra2 =   (data) =>{
        if (data.length!==0){
        function dotProduct(n1, vect)
        {
      
            let n=vect.length
            var product=[]
      
            // Loop for calculate dot product
            for (let i = 0; i < n; i++)
                product[i] = n1*vect[i];
            return product;
        }
        function norm(x){
          var sum=0
          const y=[]
          for (let i = 0; i < x.length; i++){
            sum =sum+Number(x[i]) ;
          }
          
          for (let i = 0; i < x.length; i++){
            y[i] =x[i]/sum ;
          }
          return y

        }
        
        const obj= Object.entries(data)
        
        var arr=[]
        var arr2=[]
        var i=0
        obj.forEach(([key, value]) => {
    
         let tis=moment(value['createdAt'])
         let now1=moment().startOf('min')
         arr[i]=moment.duration(now1.diff(tis)).asMinutes()
         arr2[i]=value['partname']
         i++
        
       })
       
       
       
       const arrn=norm(arr)
       
       setData2(dotProduct(100,arrn))
       setLabel2(arr2)
       setGra2(true)
      }else{
        setGra2(false)
      }
    }
      const response = await fetch('/api2'+'/api/spearparts')
      const json = await response.json()
    
     // alert(Object.keys(Object.values(json)[0])[0])
      if (response.ok) {
        
        dispatch2({type : 'SET_SPEARPARTS', payload : json})
        fetchgra2(json)
        setSubmitClicked2(true)

      
      
      }
    }





    const fetchBreakdowns = async () => {
      const fetchgra =   (data) =>{
        if (data.length!==0){
        function dotProduct(n1, vect)
        {
      
            let n=vect.length
            var product=[]
      
            // Loop for calculate dot product
            for (let i = 0; i < n; i++)
                product[i] = n1*vect[i];
            return product;
        }
        function norm(x){
          var sum=0
          const y=[]
          for (let i = 0; i < x.length; i++){
            sum =sum+Number(x[i]) ;
          }
          
          for (let i = 0; i < x.length; i++){
            y[i] =x[i]/sum ;
          }
          return y

        }
        
        const obj= Object.entries(data)
        
        var arr=[]
        var arr2=[]
        var i=0
        obj.forEach(([key, value]) => {
    
         let tis=moment(value['createdAt'])
         let now1=moment().startOf('min')
         arr[i]=moment.duration(now1.diff(tis)).asMinutes()
         arr2[i]=value['mechid']
         i++
        
       })
       
       
       
       const arrn=norm(arr)
       
       setData1(dotProduct(100,arrn))
       setLabel1(arr2)
       setGra(true)
      }else{
        setGra(false)
      }
    }
      const response = await fetch('/api1'+'/api/breakdowns')
      const json = await response.json()
    
     // alert(Object.keys(Object.values(json)[0])[0])
      if (response.ok) {
        
        dispatch({type : 'SET_BREAKDOWNS', payload : json})
        fetchgra(json)

      
      
      }
    }
    fetchBreakdowns()
    fetchSpearparts()
    fetchTargets()
    fetchDataentrys()
    fetchMechines()
  }, [])
  const colmnsp=[
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
      selector: row => row.mech,
      sortable:true
  
    },
    {
    name:'Reporter name',
    selector: row => row.employee,
    sortable:true

  },{
    name:'Designation',
    selector: row => row.designation,
    sortable:true
  },{
    name:'Mechine ID',
    selector: row => row.mechid,
    sortable:true
  }
  ,{
    name:'Part Name',
    selector: row => row.partname,
    sortable:true
  }
  ,
    {
      name:'Urgency',
      selector: row => row.urgency,
      sortable:true
    }
  ,{
    name:'Remark',
    selector: row => row.remark,
    sortable:true
  }];
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
  }
 ];
  

  if((ob !=='undefined'))  {
    if (ob !=='null'){


    

  
     return (
   // <div className='dashboard'>
     //   <h1>Dashboard</h1>
       // <div style={{ flexGrow: 1, marginLeft: '10px' }}>
         //  <Graph className="graph" data={data} labels={labels} name="Breakdowns"/>
        //</div>
    //</div>
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
                          <Header userName={name} page="Dashboard"/>
                        </div>

                        {/* Graphs */}
                        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                          <div style={{ flexGrow: 1, marginRight: '10px' }}>
                            {gra && <Graph data={data1} labels={label1} name="how long have the mechine is in breakdown since" color='#12345678'/>}
                          </div>
                          <div style={{ flexGrow: 1, marginRight: '10px' }}>
                            {gra2 && <Graph data={data2} labels={label2} name="from spear part order instance" color='#12345678'/>}
                          </div>
                        </div>
                        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                          <div style={{ flexGrow: 1, marginRight: '10px' }}>
                            {gra3 && <Graph data={data3} labels={label3} name="actual production" color='#12345678'/>}
                          </div>
                          <div style={{ flexGrow: 1, marginRight: '10px' }}>
                            {gra4 && <Graph data={data4} labels={label4} name="Target" color='#12345678'/>}
                          </div>
                        </div>
                                  {/* Recent Information */}
                        <div style={{ flexGrow: 1 }}>
                        {submitClicked &&<StickyHeadTable colums={colmn} data={mechines}/>}
                        </div>
                        <div style={{ flexGrow: 1 }}>
                        {submitClicked2 &&<StickyHeadTable colums={colmnsp} data={spearparts}/>}
                        </div>

                       
                      </div>
                    </div>
              
            
            </div> );
    }else{

      return (<h2>Login Error</h2>)
    }
  }else{
      return (<h2>Login Error</h2>)
  }
}

export default Dashboard