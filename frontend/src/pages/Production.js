import React,{useEffect,useState} from 'react'
import { useTargetsContext } from '../hook/useTargetsContext';
import Target from '../components/Target';
import Graph from '../components/Graph';
import '../components/config';
import './Dashboard.css';
import StickyHeadTable from '../components/StickyHeadTable6';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
const Production =()=> {
 
  const [data1, setData1] = useState('');
  const [label1, setLabel1] = useState('');
  const [gra,setGra]=useState(false)


  const {data_t,dispatch3} =useTargetsContext();
  
  const [submitClicked, setSubmitClicked] = useState(false);
 
  
  
   
  
  useEffect(() => {
      const fetchTargets = async () => {
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
      
           arr[i]=value['targets']
           arr2[i]=value['mechid']
           i++
          
         })
         const arrn=norm(arr)
         setData1(dotProduct(10,arrn))
         setLabel1(arr2)
         setGra(true)
        }else{
          setGra(false)
        }
        
        }
        const response = await fetch('/api6'+'/api/targets')
        const json = await response.json()
      
       // alert(Object.keys(Object.values(json)[0])[0])
        if (response.ok) {
          
          dispatch3({type : 'SET_TARGETS', payload : json})
          setSubmitClicked(true)
          fetchgra(json)
  
        
        
        }
      }
      
      fetchTargets()
      //fetchgra()
    
         
        
    }, [])
    
  

//{mech,assign,reported,designation,target,mechid,remark}
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
      name:'Assign To',
      selector: row => row.assign,
      sortable:true
  
    },
    {
      name:'Reported By',
      selector: row => row.reported,
      sortable:true
  
    },{
      name:'Designation',
      selector: row => row.designation,
      sortable:true
    },
    {
      name:'Target',
      selector: row => row.targets,
      sortable:true
    }
    ,{
      name:'Mechine ID',
      selector: row => row.mechid,
      sortable:true
    }
    ,{
      name:'Remark',
      selector: row => row.remark,
      sortable:true
    }];
  let ob=String(localStorage.getItem("firstname"));
  let ob2=String(localStorage.getItem("surename"));
  let position =String(localStorage.getItem("position"));
  let name=ob+ob2
  let ad =String(localStorage.getItem("admin"));
  
  
  
  //setData1(JSON.stringify(arr))
  //setLabel1(JSON.stringify(arr2))
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
              <Header userName={name} page="Prodction plan"/>
            </div>

            {/* Graphs */}
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '20px' }}>
                {gra &&<Graph data={data1} labels={label1} name="Target" color='#12345678'/>}
             
              
            </div>
            {/* entry  */}
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
              <Target position={position} name={name}></Target>
            </div>
            {/* Recent Information */}
            <div style={{ flexGrow: 1 }}>
            {submitClicked &&<StickyHeadTable colums={colmn} data={data_t} apin='/api6' api='/api/targets/' dis='DELETE_TARGET'/>}
            
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

export default Production