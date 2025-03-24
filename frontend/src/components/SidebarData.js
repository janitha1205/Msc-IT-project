import React from 'react'
import * as FaIcons from 'react-icons/fa6'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as CiIcons from 'react-icons/ci'
export const SidebarData=[

{
 title: 'DashBoard',
 path:'/dashboard',
 icon: <AiIcons.AiFillHome/>,
 cName: 'nav-text'

},
{
    title: 'SpearParts',
    path:'/spearparts',
    icon: <FaIcons.FaGear/>,
    cName: 'nav-text'
   
},
{
    title: 'Breakdowns',
    path:'/breakdowns',
    icon: <IoIcons.IoIosWarning/>,
    cName: 'nav-text'
   
},
{
    
    title: 'Admin',
    path:'/admin',
    icon: <FaIcons.FaLock/>,
    cName: 'nav-text'
   
}
,{
    
    title: 'dataentry',
    path:'/dataen',
    icon: <FaIcons.FaDatabase/>,
    cName: 'nav-text'
   
}
,{
    
    title: 'Production',
    path:'/output',
    icon: <FaIcons.FaIndustry/>,
    cName: 'nav-text'
   
},
{
    
    title: 'Add Mechines',
    path:'/addmechin',
    icon: <FaIcons.FaWheelchair/>,
    cName: 'nav-text'
   
},
{
    title: 'Log Out',
    path:'/',
    icon: <CiIcons.CiLogin/>,
    cName: 'nav-text'
   
}
   



]