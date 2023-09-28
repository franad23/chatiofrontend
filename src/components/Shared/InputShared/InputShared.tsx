import { ChangeEvent, useState } from 'react';
import './inputshared.css'

interface Props {
  inputField: string;
  type: string;
  placeholder: string;
  value?: string;
  name: string;
  toHandleChange: (e: object) => void;
}

function InputShared({ inputField, type, placeholder, value, name, toHandleChange }: Props) {
  
  const [inputChange, setInputChange] = useState(value || "");

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setInputChange(target.value);
    const inputData = {name: name, value: target.value}
    toHandleChange(inputData);
  }

  return (
    <div className='inputSharedMainContainer'>
      <h3 className='inputField'>{inputField}:</h3>
      <input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        value={inputChange} 
        onChange={handleInputChange} 
        className='inputShared'
        />
    </div>
  )
}

export default InputShared