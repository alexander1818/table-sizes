import React, { useState } from 'react'
import Kids from './kids/Kids';
import Men from './men/Men';
import Women from './women/Women';
import i18n from '../plugins/I18n';

const Genders = () => {
    const genders = [
        `${i18n.t('genders.women')}`,
        `${i18n.t('genders.men')}`,
        `${i18n.t('genders.kids')}`
    ];
    const switchGender = [<Women />, <Men />, <Kids />]
    const [selectedGender, setSelectedGender] = useState(0)

    const handleGender = (index, item) => {
        setSelectedGender(index)
    }

    return (
        <div className="genderWrapper">
            <div className="gender">
                {genders.map((item, index) => {
                    return (
                        <div key={index} className={index === selectedGender ? "gender-item__active" : "gender-item"}
                            onClick={() => handleGender(index, item)}>
                            <p className="gender-item__text">{item}</p>
                        </div>
                    )
                })}
            </div>
            {switchGender.map((el, index) => {
                if (index === selectedGender) {
                    return (<div className="" key={index}>{el}</div>)
                }
            })}

        </div >
    )
}

export default Genders;
