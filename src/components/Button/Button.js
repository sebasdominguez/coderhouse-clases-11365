import React from 'react'

const Button = ({text, children}) => {

    return (
        <React.Fragment>
            { text && <>
                <button style={ { borderRadius: '7px', backgroundColor: 'green'} }> 
                    {text}
                </button> 
                    {children}
                </>
            }
        </React.Fragment>
    )
}

export default Button;
