import React from 'react'
import Button from '../Button/Button'
import ButtonCL from '../Button/ButtonCL'
import './home.css'

export const Home = ({greeting}) => {

    let buttonText = 'BOTON!!'

    return (
        <div className='homeStyle'>
            <h1>{greeting}</h1>
            <Button text={'BOTON 1'}>
                <h1>Welcome Coders</h1>
                <h3>Aprendiendo React!</h3>
            </Button>
            <ButtonCL name={buttonText}/>
        </div>
    )
}