import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ComponenteEjemplo = () => {

    const { itemId } = useParams()

    useEffect(()=>{
        console.log("itemId cambio a: ", itemId)
    }, [itemId])

    return (
        <div style={{ paddingTop: 300}}>
            SOY EL ITEM {itemId}
        </div>
    )
}
