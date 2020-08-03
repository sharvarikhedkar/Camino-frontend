import React from 'react';
import './step.css';

function Step(props){
    return (
        <div>
            <div className = "step">  
                    <div  style={{float:'left'}}> 
                        <p>Step 1: <b>Basic Information</b></p>
                    </div>
                    <div style={{float:'right'}}>
                    <p><b>Step 1 of 3</b></p>
                    </div>
            </div>
        <div className = "border"></div>
        </div>
    )
}

export default Step;