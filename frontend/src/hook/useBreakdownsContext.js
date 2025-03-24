import { BreakdownsContext } from "../context/BreakdownsContext"
import { useContext } from "react"

export const useBreakdownsContext = () => {
  const context = useContext(BreakdownsContext)

  if(!context) {
    throw Error('useBreakdownsContext must be used inside a BreakdownsContextProvider')
  }

  return context
}