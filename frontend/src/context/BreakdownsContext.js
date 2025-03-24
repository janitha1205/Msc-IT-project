import { createContext, useReducer } from 'react'

export const BreakdownsContext = createContext()

export const breakdownsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BREAKDOWNS':
      return { 
        breakdowns: action.payload 
      }
    case 'CREATE_BREAKDOWN':
      return { 
        breakdowns: [action.payload, ...state.breakdowns] 
      }
    case 'DELETE_BREAKDOWN':
      return { 
        breakdowns: state.breakdowns.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const BreakdownsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(breakdownsReducer, { 
    breakdowns: null
  })
  
  return (
    <BreakdownsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </BreakdownsContext.Provider>
  )
}