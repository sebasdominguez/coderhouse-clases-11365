import React, { useState } from 'react'

export const CartContext = React.createContext(0)

export const Context = ({children}) => {

    const [contador, setContador] = useState(0)

    return(
        <CartContext.Provider value={[contador, setContador]}>
            {children}
        </CartContext.Provider>
    )

}