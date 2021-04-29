import React, { useState } from 'react';
import Clothes from './Clothes';
import Shoes from "./Shoes";
import i18n from '../../plugins/I18n';
import './women.css';

const Women = () => {
    const things = [
        `${i18n.t('women.clothes')}`,
        `${i18n.t('women.shoes')}`
    ]
    const select = [<Clothes />, <Shoes />]
    const [selectedThings, setSelectedGenderThings] = useState(0)

    const handleThings = (index, item) => {
        setSelectedGenderThings(index)
    }
    return (
        <div className="women">
            {things.map((item, index) => {
                return (
                    <div key={index} className={index === selectedThings ? "women-things__active" : "women-things"}
                        onClick={() => handleThings(index, item)}>
                        <p className="women-things__item">{item}</p>
                    </div>
                )
            })}
            {select.map((el, index) => {
                if (index === selectedThings) {
                    return (<div className="women-things__table" key={index}>{el}</div>)
                }
            })}
        </div>
    )
}

export default Women;
