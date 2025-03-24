import { createContext, useReducer } from 'react'


export const MechinesContext = createContext()

export const MechinesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MECHINES':
      return { 
        mechines: action.payload 
      }
    case 'CREATE_MECHINE':
      return { 
        mechines: [action.payload, ...state.mechines] 
      }
    case 'DELETE_MECHINE':
      return { 
        mechines: state.mechines.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const MechinesContextProvider = ({ children }) => {
  const [state, dispatch1] = useReducer(MechinesReducer, { 
    mechines: null
  })
  
  return (
    <MechinesContext.Provider value={{ ...state, dispatch1 }}>
      { children }
    </MechinesContext.Provider >
  )
}