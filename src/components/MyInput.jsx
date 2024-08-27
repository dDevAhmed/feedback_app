'use client';

import { useState } from 'react';

const MyInput = () => {
 const [inputValue, setInputValue] = useState('');

 const handleChange = (e) => {
   setInputValue(e.target.value);
 };

 return (
   <div>
     <input
       type="text"
       value={inputValue}
       onChange={handleChange}
       className="border border-green-400 p-2 rounded shadow"
       placeholder="Type something..."
     />
     <p className="mt-4 text-green-400">You typed: {inputValue}</p>
   </div>
 );
};

export default MyInput;
