import React, { useState } from 'react'
import InfantShoesKids from './InfantShoesKids'
import JuniorShoesKids from './JuniorShoesKids'
import ToddlerShoesKids from './ToddlerShoesKids'
import i18n from '../../plugins/I18n';

const KidsShoes = () => {
    const shoes = [
        `${i18n.t('kids.ageShoes.infant')}`,
        `${i18n.t('kids.ageShoes.toddler')}`,
        `${i18n.t('kids.ageShoes.junior')}`
    ]
    const [selectedShoes, setSelectedShoes] = useState(0)
    const selectShoes = [<InfantShoesKids />, <ToddlerShoesKids />, <JuniorShoesKids />]

    const handleShoes = (index) => {
        setSelectedShoes(index)
    }
    return (
        <>
            <div className="kids-shoes">
                {shoes.map((item, index) => {
                    return (
                        <div key={index} className={index === selectedShoes ? "kids-things__active" : "kids-things"}
                            onClick={() => handleShoes(index)}>
                            <p className="kids-things__item">{item}</p>
                        </div>
                    )
                })}
            </div>
            {selectShoes.map((el, index) => {
                if (index === selectedShoes) {
                    return (<div key={index} className="kids-things__table">{el}</div>)
                }
            })}
        </>
    )
}

export default KidsShoes;
