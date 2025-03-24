import { createContext, useReducer } from 'react'

export const DataentrysContext = createContext()

export const dataentrysReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATAENTRYS':
      return { 
        dataentrys: action.payload 
      }
    case 'CREATE_DATAENTRY':
      return { 
        dataentrys: [action.payload, ...state.dataentrys] 
      }
    case 'DELETE_DATAENTRY':
      return { 
        dataentrys: state.dataentrys.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const DataentrysContextProvider = ({ children }) => {
  const [state, dispatch4] = useReducer(dataentrysReducer, { 
    dataentrys: null
  })
  
  return (
    <DataentrysContext.Provider value={{ ...state, dispatch4 }}>
      { children }
    </DataentrysContext.Provider>
  )
}