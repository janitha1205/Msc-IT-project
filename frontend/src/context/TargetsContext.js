import { createContext, useReducer } from 'react'

export const TargetsContext = createContext()

export const targetReducers = (state, action) => {
  switch (action.type) {
    case 'SET_TARGETS':
      return { 
        data_t: action.payload 
      }
    case 'CREATE_TARGET':
      return { 
        data_t: [action.payload, ...state.targets] 
      }
    case 'DELETE_TARGET':
      return { 
        data_t: state.targets.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const TargetsContextProvider = ({ children }) => {
  const [state, dispatch3] = useReducer(targetReducers, { 
    data_t: null
  })
  
  return (
    <TargetsContext.Provider value={{ ...state, dispatch3 }}>
      { children }
    </TargetsContext.Provider>
  )
}