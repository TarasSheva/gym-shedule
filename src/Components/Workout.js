import React, {Component} from "react";
import './Workout.css';

class Workout extends Component {
    state = {
        day: [
            {text: 'Понедельник', id: 1},
            {text: 'Среда', id: 2},
            {text: 'Пятница', id: 3}
        ],

    }
    render() {
        return (
            <div className='Workout'>
                <div className="WorkoutWrapper">
                    <h1>+++++++++</h1>
                </div>
            </div>
        )
    }
}
export default Workout;