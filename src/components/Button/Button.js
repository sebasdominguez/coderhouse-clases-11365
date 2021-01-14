import React from 'react'

const Button = ({text, children, handleState}) => {

    return (
        <React.Fragment>
            { text && 
                <>
                    <button onClick={handleState} style={ { borderRadius: '7px', backgroundColor: 'green'} } > 
                        {text}
                    </button> 
                    { children && children }
                </>
            }
        </React.Fragment>
    )
}

export default Button;
