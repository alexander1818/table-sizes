import React, { useState } from 'react';
import Jackets from './Jackets';
import './men.css';
import Shoes from './Shoes';
import Shorts from './Shorts';
import Tops from './Tops';
import Trousers from './Trousers';
import i18n from '../../plugins/I18n';

const Men = () => {
    const things = [
        `${i18n.t('men.tops')}`,
        `${i18n.t('men.trousers')}`,
        `${i18n.t('men.jackets')}`,
        `${i18n.t('men.shorts')}`,
        `${i18n.t('men.shoes')}`]
    const select = [<Tops />, <Trousers />, <Jackets />, <Shorts />, <Shoes />]
    const [selectedThings, setSelectedGenderThings] = useState(0)

    const handleThings = (index) => {
        setSelectedGenderThings(index)
    }
    return (
        <div className="men">
            <div className="wrapper-men__things">
                {things.map((item, index) => {
                    return (
                        <div key={index} className={index === selectedThings ? "men-things__active" : "men-things"}
                            onClick={() => handleThings(index)}>
                            <p className="men-things__item">{item}</p>
                        </div>
                    )
                })}
            </div>
            {select.map((el, index) => {
                if (index === selectedThings) {
                    return (<div className="men-things__table" key={index}>{el}</div>)
                }
            })}
        </div>
    )
}

export default Men;
