import React, { useState, Fragment, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Count from './Count'

export default function CountContainer({min, max, contador, setContador}) {
    
    const [show, setShow] = useState(false);
    const [disableMasButton, setDisableMasButton] = useState(false);
    const [disableMenosButton, setDisableMenosButton] = useState(true);

    const handleContador = (sign) => {
        sign === '+'  && (contador === Number(max)) && setShow(true)
        sign === '+' && (contador < Number(max)) && setContador(contador+1)
        sign === '-' && (contador > Number(min)) && setContador(contador-1)
    }

    useEffect(()=>{
        if (contador === Number(max)) setDisableMasButton(true)
        if (contador === Number(min)) setDisableMenosButton(true)
        if ( (contador < Number(max)) && (contador > Number(min)) ) {
            disableMasButton && setDisableMasButton(false)
            disableMenosButton && setDisableMenosButton(false)
        }
    },[contador])

    return (
        <Fragment>
            <Count contador={contador} handleCount={handleContador} disableMenosButton={disableMenosButton} disableMasButton={disableMasButton} />
            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Out of stock!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Alcanzó el maximo en stock</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
