import { createContext, useReducer } from 'react'


export const SpearpartsContext = createContext()

export const spearpartsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SPEARPARTS':
      return { 
        spearparts: action.payload 
      }
    case 'CREATE_SPEARPART':
      return { 
        spearparts: [action.payload, ...state.spearparts] 
      }
    case 'DELETE_SPEARPART':
      return { 
        spearparts: state.breakdowns.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const SpearpartsContextProvider = ({ children }) => {
  const [state, dispatch2] = useReducer(spearpartsReducer, { 
    spearparts: null
  })
  
  return (
    <SpearpartsContext.Provider value={{ ...state, dispatch2 }}>
      { children }
    </SpearpartsContext.Provider >
  )
}