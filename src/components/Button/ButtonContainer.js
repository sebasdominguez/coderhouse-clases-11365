import React from 'react'
import Button from './Button'

class ButtonCL extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            qty: this.props.qty
        }
    }

    handleState(){
        this.setState({textBotonCl: "HOLA CODERS"})
    }

    render(){
        return(
            <Button cantidad={this.state.qty} handleState={()=>this.handleState()} />
        )
    }   
}

export default ButtonCL;