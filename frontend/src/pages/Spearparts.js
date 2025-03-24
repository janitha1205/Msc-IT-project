import React,{useEffect,useState} from 'react'
import { useSpearpartsContext } from '../hook/useSpearpartsContext'
import Graph from '../components/Graph'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Form_s from '../components/Form_s'
import StickyHeadTable from '../components/StickyHeadTable4';

function Spearparts() {
  let ob=String(localStorage.getItem("firstname"));
  let ob2=String(localStorage.getItem("surename"));
  let ad =String(localStorage.getItem("admin"));
  let position =String(localStorage.getItem("position"));
  let name=ob+ob2
  
  var moment = require('moment');
  const {spearparts,dispatch2} =useSpearpartsContext();
  
  const [submitClicked, setSubmitClicked] = useState(false);
  const [data1, setData1] = useState('');
  const [label1, setLabel1] = useState('');
  const [gra,setGra]=useState(false)
   
  
    useEffect(() => {
      const fetchSpearparts = async () => {
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
           arr2[i]=value['partname']
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
        const response = await fetch('/api2'+'/api/spearparts')
        const json = await response.json()
      
       // alert(Object.keys(Object.values(json)[0])[0])
        if (response.ok) {
          
          dispatch2({type : 'SET_SPEARPARTS', payload : json})
          setSubmitClicked(true)
          fetchgra(json)
  
        
        
        }
      }
  
      fetchSpearparts()
    }, [])
    
  
 
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
                <Header userName={name} page="Spear Parts List "/>
              </div>
              {/* Graphs */}
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '20px' }}>
                {gra &&<Graph data={data1} labels={label1} name="from spear part order instance" color='#12345678'/>}
            
            </div>

              {/* form */}
              <div>
              <Form_s name={name} position={position}></Form_s>
              </div>

              {/* Recent Information */}
              <div style={{ flexGrow: 1 }}>
              {submitClicked &&<StickyHeadTable colums={colmn} data={spearparts} apin='/api2' api='/api/spearparts/' dis='DELETE_SPEARPART'/>}
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

export default Spearparts