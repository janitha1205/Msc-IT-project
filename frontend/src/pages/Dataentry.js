import React,{useEffect,useState} from 'react'
import { useDataentrysContext } from '../hook/useDataentrysContext'
import Graph from '../components/Graph';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Production_en from '../components/Production_en'
import StickyHeadTable from '../components/StickyHeadTable5';
function Dataentry() {
  let ob=String(localStorage.getItem("firstname"));
  let ob2=String(localStorage.getItem("surename"));
  let ad =String(localStorage.getItem("admin"));
  let position =String(localStorage.getItem("position"));
  let name=ob+ob2
  
  const normalize = require('array-normalize')
  
  const [data1, setData1] = useState('');
  const [label1, setLabel1] = useState('');
  const [gra,setGra]=useState(false)
  
  const {dataentrys,dispatch4} =useDataentrysContext();
  
  const [submitClicked, setSubmitClicked] = useState(false);
  
  
   
  
    useEffect(() => {
      const fetchDataentrys = async () => {
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
      
           arr[i]=value['actual']
         
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
        const response = await fetch('/api3'+'/api/dataentry')
        const json = await response.json()
      
       // alert(Object.keys(Object.values(json)[0])[0])
        if (response.ok) {
          
          dispatch4({type : 'SET_DATAENTRYS', payload : json})
          setSubmitClicked(true)
          fetchgra(json)
  
        
        
        }
      }
  
      fetchDataentrys()
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
    name:'Current Output',
    selector: row => row.actual,
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
                <Header userName={name} page="production output "/>
              </div>
              {/* Graphs */}
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '20px' }}>
                  {gra &&<Graph data={data1} labels={label1} name="actual production" color='#12345678'/>}
             
              </div>
              

              {/* form */}
              <div>
              <Production_en reporter={name} position={position}></Production_en>
              </div>

              {/* Recent Information */}
              <div style={{ flexGrow: 1 }}>
              {submitClicked &&<StickyHeadTable colums={colmn} data={dataentrys} apin='/api3' api='/api/dataentry/' dis='DELETE_DATAENTRY'/>}
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

export default Dataentry