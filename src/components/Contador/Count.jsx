import React from 'react'
import { Button } from 'react-bootstrap'
import './count.css'

function Count({contador, handleCount, disableMenosButton, disableMasButton}) {

    return (
        <div className='count'>
            <Button variant="danger" className={`${disableMenosButton? "btn-disabled" : null} mr-4`} onClick={()=>handleCount("-")} > - </Button>
            <div>
                {contador}
            </div>
            <Button variant="success" className={`${disableMasButton? "btn-disabled" : null} ml-4`} onClick={()=>handleCount("+")}> + </Button>
        </div>
    )
}

export default Count;