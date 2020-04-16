import React from "react";
import './trainStyle.css';

const Wednesday = (props) => {
    return (
        <div className='trainStyle'>
            <div>
                <h1>Ноги и бицепс</h1>
                <ul>
                    <li>Приседания со штангой 5 подхода 10-20 повторений</li>
                    <li>Подъемы на стул со штангой или гантелями 5 подхода 10-15 повторений</li>
                    <li>Выпады со штангой или гантелями 5 подхода 10-15 повторений</li>
                    <li>Подъем на носки со штангой или гантелями 3 подхода 20-30 повторений</li>
                    <li>Подъем штанги на бицепс 4 подхода на максимум</li>
                    <li>Подъем гантели на бицепс 3 подхода на максимум</li>
                </ul>
                <button onClick={props.toBack}>Back</button>
            </div>
        </div>
    )
};
export default Wednesday;