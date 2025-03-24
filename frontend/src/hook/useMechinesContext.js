import { MechinesContext } from "../context/MechinesContext"
import { useContext } from "react"

export const useMechinesContext = () => {
  const context = useContext(MechinesContext)

  if(!context) {
    throw Error('useMechinesContext must be used inside a MechninesContextProvider')
  }

  return context
}