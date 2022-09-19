import { useState } from 'react';

export const Modal = (initialValue=false) => {
    const [value, setValue] = useState(initialValue)
    const toggleValue = () => setValue(!value)
    
    return [value, toggleValue]
    //return value
};