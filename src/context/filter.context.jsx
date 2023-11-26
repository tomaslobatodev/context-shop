import { createContext, useState } from "react"
import { PropTypes } from 'prop-types'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filter, setFilter] = useState('')

  return (
    <FiltersContext.Provider value={{filter, setFilter}}> 
      {children}
    </FiltersContext.Provider>
  )
}

FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
