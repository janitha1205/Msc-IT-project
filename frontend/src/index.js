import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BreakdownsContextProvider } from './context/BreakdownsContext';
import { SpearpartsContextProvider } from './context/SpearpartsContext';
import { DataentrysContextProvider } from './context/DataentrysContext';
import { LoginsContextProvider } from './context/LoginContext';
import { MechinesContextProvider } from './context/MechinesContext';
import { TargetsContextProvider } from './context/TargetsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TargetsContextProvider>
    <MechinesContextProvider>
     <LoginsContextProvider>
      <DataentrysContextProvider>
       <BreakdownsContextProvider>
        <SpearpartsContextProvider>
    
          <App />
     
        </SpearpartsContextProvider>

       </BreakdownsContextProvider>
      </DataentrysContextProvider>
     </LoginsContextProvider>
    </MechinesContextProvider>
    </TargetsContextProvider>
  </React.StrictMode>
);

