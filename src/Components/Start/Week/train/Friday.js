import React from "react";
import './trainStyle.css';

const Friday = (props) => {
    return (
        <div className='trainStyle'>
            <div>
                <h1>Спина, трицепс, пресс</h1>
                <ul>
                    <li>Отжимания широким хватом (кисти в стороны) 5 подхода на максимум</li>
                    <li>Тяга к поясу 5 подхода 10-12 повторений</li>
                    <li>Отжимания узким хватом 4 подхода 10-12 повторений</li>
                    <li>Разгибания с гантелей из-за головы 5 подходов 10-12 повторений</li>
                    <li>Скручивания на полу 5 подходов на максимум</li>
                </ul>
                <button onClick={props.toBack}>Back</button>
            </div>
        </div>
    )
};
export default Friday;