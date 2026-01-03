import { useState } from 'react'

export const useCounter = (inialValue: number = 10) => {
    const [counter, setcounter] = useState(inialValue);
    
    const handleAdd = () => {
        setcounter(counter+1);
    }

    const handleSubtract = () => {
        setcounter(prev => prev - 1);
    }

    const handleReset = () => {
        setcounter(inialValue)
    }

    return {
        counter,
        handleAdd,
        handleSubtract,
        handleReset
    }
}
