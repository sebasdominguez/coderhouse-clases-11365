import React from 'react'
import { ItemDetail } from '../Item/ItemDetail/ItemDetail'
import './itemList.css'

export const ItemList = () => {

    const items = [
        {
            id: 1,
            title: "Producto 1",
            price: 245,
            stock: 10
        },
        {
            id: 2,
            title: "Producto 2",
            price: 120,
            stock: 7
        },
        {
            id: 3,
            title: "Producto 3",
            price: 178,
            stock: 9
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
        </div>
    )
}