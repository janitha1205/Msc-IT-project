
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Breakdown from './pages/Breakdown';
import Spearparts from './pages/Spearparts';
import Admin from './pages/Admin'
import Login from './pages/Login';
import Production from './pages/Production';
import Dataentry from './pages/Dataentry';
import Add_mechine from './pages/Add_mechine';
function App() {

  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/breakdowns' Component={Breakdown}/>
          <Route path='/spearparts' Component={Spearparts}/>
          <Route path='/admin' Component={Admin}/>
          <Route path='/output' Component={Production}/>
          <Route path='/dataen' Component={Dataentry}/>
          <Route path='/' Component={Login}/>
          <Route path='/addmechin' Component={Add_mechine}/>

        

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
