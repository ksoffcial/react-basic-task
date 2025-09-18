import React from 'react'
import { useState } from 'react'

const Arrayofobj = () => {
    const [array, setarray] = useState([{ num: 1, num2: 2, num3: 3 }])

    const handleToUpdate = () => {
        setarray((prev) => {
            return [...prev, prev.num2 + 1]
        })
    }

    return (
        <div>
            <ul>
                <li>{array[0].num}</li>
                <li>{array[0].num2}</li>
                <li>{array[0].num3}</li>
            </ul>
            <button onClick={handleToUpdate}>click me!</button>
        </div>
    )
}

export default Arrayofobj