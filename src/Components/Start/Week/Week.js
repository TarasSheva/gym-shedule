import React from "react";
import './Week.css';

const  Week = props => {
    return (
        <div className='Week'>
            <div className="WeekWrapper">
                <p onClick={props.openMon}><strong>MONDAY</strong></p>
                <br/>
                <p onClick={props.openWed}><strong>WEDNESDAY</strong></p>
                <br/>
                <p onClick={props.openFri}><strong>FRIDAY</strong></p>
            </div>
        </div>
    )
}
export default Week;