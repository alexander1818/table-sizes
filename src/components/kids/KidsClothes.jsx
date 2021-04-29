import React, { useState } from 'react'
import ClothesBabies from './ClothesBabies'
import ClothesChildren from './ClothesChildren'
import ClothesTeenBoys from './ClothesTeenBoys'
import ClothesTeenGirls from './ClothesTeenGirls'
import i18n from '../../plugins/I18n';

const KidsClothes = () => {
    const ageClothes = [
        `${i18n.t('kids.ageClothes.babies')}`,
        `${i18n.t('kids.ageClothes.children')}`,
        `${i18n.t('kids.ageClothes.teenBoys')}`,
        `${i18n.t('kids.ageClothes.teenGirls')}`
    ]
    const [selectedAge, setSelectedAge] = useState(0)
    const selectAge = [<ClothesBabies />, <ClothesChildren />, <ClothesTeenBoys />, <ClothesTeenGirls />]
    const handleAgeClothes = (index) => {
        setSelectedAge(index)
    }
    return (
        <>
            <div className="kids-clothes">
                {ageClothes.map((item, index) => {
                    return (
                        <div key={index} className={index === selectedAge ? "kids-things__active" : "kids-things"}
                            onClick={() => handleAgeClothes(index)} >
                            <p className="kids-things__item">{item}</p>
                        </div>
                    )
                })}
            </div>
            {selectAge.map((el, index) => {
                if (index === selectedAge) {
                    return (<div key={index} className="kids-things__table">{el}</div>)
                }
            })}
        </>
    )
}

export default KidsClothes;
