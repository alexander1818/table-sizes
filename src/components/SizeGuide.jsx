import React, { useState } from 'react';
import SizeGuideTable from './tables/SizeGuideTable';

const things = ['Clothes', 'Shoes']

const SizeGuide = () => {
    const [selectedThings, setSelectedGenderThings] = useState(null)
    const handleThings = (index, item) => {
        setSelectedGenderThings(index)
    }
    return (
        <>
            <div className="size-guide">
                {things.map((item, index) => {
                    return (
                        <div key={index} className={index === selectedThings ? "size-guide__things--active" : "size-guide-things"}
                            onClick={() => handleThings(index, item)}>
                            <p className="size-guide__things--item">{item}</p>
                        </div>
                    )
                })}
            </div>
            <SizeGuideTable />
        </>
    )
}

export default SizeGuide;
