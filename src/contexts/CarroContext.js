import React, { createContext, useState } from 'react'
export const CarroContext = createContext(null)
export const CarroProvider = ({children}) => {
    const [carro, setCarro] = useState([])
  return (
    <CarroContext.Provider value={[carro, setCarro]}>
      {children}
    </CarroContext.Provider>
  )
}

