import React from 'react'
import ButtonCL from '../Button/ButtonContainer'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import './itemList.css'

export const ItemList = ({greeting}) => {

    let buttonText = 'SOY UN BOTON'

    const items = [
        {
            id: 1,
            title: "Producto 1",
            price: 245
        },
        {
            id: 2,
            title: "Producto 2",
            price: 120
        },
        {
            id: 3,
            title: "Producto 3",
            price: 178
        }
    ]

    return (
        <div className='homeStyle' style={ {paddinGtop: 500}}>
            {/*<h1>{greeting}</h1>*/}
            {
                items && items.map((item)=>{
                    return <ItemDetail key={item.id} item={item}/>
                })
            }
            <ButtonCL name={buttonText}/>
        </div>
    )
}