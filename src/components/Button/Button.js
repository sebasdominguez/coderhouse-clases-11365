import React from 'react'

const Button = ({cantidad, children, handleState}) => {

    return (
        <React.Fragment>
            { cantidad && 
                <>
                    <button onClick={handleState} style={ { borderRadius: '7px', backgroundColor: 'green'} } > 
                        Comprar: {cantidad}u.
                    </button> 
                    { children && children }
                </>
            }
        </React.Fragment>
    )
}

export default Button;
