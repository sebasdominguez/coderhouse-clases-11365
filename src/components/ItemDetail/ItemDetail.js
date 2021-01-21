import React from 'react'
import './itemDetail.css'
//import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export const ItemDetail = ({item}) => {

    return (
        <div className="contItem">
            <Link to={`/item/${item.id}`}>
                <h2>
                    SOY UN ITEM DETAIL
                </h2>
                { item &&   
                    <div> {item.title} ${item.price} </div>
                }
            </Link>
        </div>
    )
}
