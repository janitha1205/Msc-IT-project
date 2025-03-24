import { LoginContext } from "../context/LoginContext"
import { useContext } from "react"

export const useLoginsContext = () => {
  const context = useContext(LoginContext)

  if(!context) {
    throw Error('useLoginsContext must be used inside a LoginContextProvider')
  }

  return context
}