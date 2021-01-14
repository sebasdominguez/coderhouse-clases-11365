import React from 'react'
import Button from './Button'

class ButtonCL extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            textBotonCl: this.props.name
        }
    }

    handleState(){
        this.setState({textBotonCl: "HOLA CODERS"})
    }

    render(){
        return(
            <Button text={this.state.textBotonCl} handleState={()=>this.handleState()} />
        )
    }   
}

export default ButtonCL;