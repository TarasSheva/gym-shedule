import React from "react";
import './Start.css';


const Start = props => {
    return (
        <div className='homeStart'>
            <div className='Start'>
                <h1>WELCOME</h1>
                <button onClick={props.onClose}>Get Start</button>
            </div>
        </div>

    )
}

export default Start;
