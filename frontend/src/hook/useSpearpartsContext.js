import { SpearpartsContext } from "../context/SpearpartsContext"
import { useContext } from "react"

export const useSpearpartsContext = () => {
  const context = useContext(SpearpartsContext)

  if(!context) {
    throw Error('useSpearpartsContext must be used inside a SpearpartsContextProvider')
  }

  return context
}