import { TargetsContext } from "../context/TargetsContext"
import { useContext } from "react"

export const useTargetsContext = () => {
  const context = useContext(TargetsContext)

  if(!context) {
    throw Error('useTargetsContext must be used inside a TargetsContextProvider')
  }

  return context
}