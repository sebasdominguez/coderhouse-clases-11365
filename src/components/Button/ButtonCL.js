import React from 'react'
import Button from '../Button/Button'

class ButtonCL extends React.Component{
    
    render(){
        return(
            <Button text={this.props.name} />
        )
    }   
}

export default ButtonCL;