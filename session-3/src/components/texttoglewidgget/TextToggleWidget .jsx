import React, { useState } from 'react';

function TextToggleWidget() {
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }


    return (
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">ინტერაქტიული ტექსტი და გადამრთველი</h3>
            <input type="text" value={text}  onChange={handleChange} placeholder="შეიყვანე ტექსტი"   className='bg-red-500 rounded text-white p-2'/>
            <button onClick={toggleVisibility} className='px-4 py-2 text-blue-500 rounded'> {isVisible? "ტექსტის დამალვა" : "ტექსტის ჩვენება"}</button>
            {isVisible && (<p className='mb-2 text-gray-500'> ტექსტი: {text}</p>)}
            {isVisible && (<p className='mb-2 text-gray-400' >სიმბოლოების რაოდენობა: {text.length}</p>)}
        </div>
    );
}

export default TextToggleWidget;
