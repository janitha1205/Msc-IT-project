import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './Navbar.css'
const  Navbar=({admin_p})=> {
  let navigate = useNavigate();
  const saveDataToLocalStorage=(a,b) =>
  {
    if (a==='/'){
      localStorage.clear();
    }
    navigate(a);
  }
  const [sidebar,setSidebar]=useState(false);
  const showSidebar =() => setSidebar(!sidebar);

  return (
    <>
    <div className='navbar'>
        <Link to="#" className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='nav-toggle'>
              <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineClose/>
              </Link>

            </li>
            

            {SidebarData.map((item,index)=>{

              if (admin_p==="1"){

               return( <li key={index} className={item.cName}>
                  <Button  value={item.path} onClick={(event)=>saveDataToLocalStorage(item.path,event)}>
                    {item.icon}
                    <span >{item.title}</span>
                   
                  </Button>
               
                  </li>)
                }else{

                  if (item.path!=='/admin'){

                    return(
                  
                    <li key={index} className={item.cName}>
                    <Button  value={item.path} onClick={(event)=>saveDataToLocalStorage(item.path,event)}>
                      {item.icon}
                      <span >{item.title}</span>
                     
                    </Button>
                    </li>)
                  }

                }

                }



         

              
              )}  
          </ul>
          
        </nav>
    </div>
    
    </>
  )
}

export default Navbar