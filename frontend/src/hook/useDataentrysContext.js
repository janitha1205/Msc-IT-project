import { DataentrysContext } from "../context/DataentrysContext"
import { useContext } from "react"

export const useDataentrysContext = () => {
  const context = useContext(DataentrysContext)

  if(!context) {
    throw Error('useDataentrysContext must be used inside a DataentrysContextProvider')
  }

  return context
}