import React, { useState } from 'react';
import './kids.css';
import KidsClothes from './KidsClothes';
import KidsShoes from './KidsShoes';
import i18n from '../../plugins/I18n';

const Kids = () => {
    const things = [
        `${i18n.t('kids.things.clothes')}`, 
        `${i18n.t('kids.things.shoes')}`
    ]
    const [selectedThings, setSelectedThings] = useState(0)

    const handleThings = (index) => {
        setSelectedThings(index)
    }
    return (
        <>
            <div className="kids">
                {things.map((item, index) => {
                    return (
                        <div key={index} className={index === selectedThings ? "kids-things__active" : "kids-things"}
                            onClick={() => handleThings(index)}>
                            <p className="kids-things__item">{item}</p>
                        </div>
                    )
                })}
            </div>

            <div className="wrapper-kids__things">
                {selectedThings === 0 ? <KidsClothes /> : <KidsShoes />}
            </div>

        </>
    )
}

export default Kids;
