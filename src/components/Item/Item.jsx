import React, { useState, useContext } from 'react'
import  { useParams } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Contador from '../Contador/CountContainer'
import { CartContext } from '../../cartContext'
import './itemDetailStyle.css'

export default function Item() {
    const [cuentaLocal, setCuentaLocal] = useState(0)
    const [contador, setContador] = useContext(CartContext)
    const { itemId } = useParams()
    const item = {
            id: 1,
            title: `Titulo del Produco ${itemId}`,
            description: "Soy la descripcion del Producto ",
            price: 245,
            stock: 10
        }

    return (
            <div className='itemDetailCont'>
                <Card className="text-center" bg='secondary' text='white' style={{minHeight:'90vh'}}>
                <Card.Header>Detalles del Producto {itemId}</Card.Header>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text> {item.description}</Card.Text>
                
                    <div className="contadorItem">
                        <Contador min={0} max={item.stock} contador={cuentaLocal} setContador={setCuentaLocal}>Agregar</Contador>
                    </div>
                    {
                        cuentaLocal >= 0 && <Button variant="primary" onClick={()=>setContador(cuentaLocal)}>Quiero {cuentaLocal}!</Button>
                        
                    }
                </Card.Body>
                <Card.Footer className="text-white">{item.stock} en Stock!</Card.Footer>
                </Card>
            </div>
        )
}
