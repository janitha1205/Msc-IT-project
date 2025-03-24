import { createContext, useReducer } from 'react'


export const LoginContext = createContext()

export const LoginReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOGINS':
      return { 
        logins: action.payload 
      }
    case 'CREATE_LOGIN':
      return { 
        logins: [action.payload, ...state.logins] 
      }
    case 'DELETE_LOGIN':
      return { 
        logins: state.logins.filter(w => w.ID !== action.payload.ID) 
      }
    default:
      return state
  }
}

export const LoginsContextProvider = ({ children }) => {
  const [state, dispatch5] = useReducer(LoginReducer, { 
    logins: null
  })
  
  return (
    <LoginContext.Provider value={{ ...state, dispatch5 }}>
      { children }
    </LoginContext.Provider >
  )
}