import React from 'react';

const Input = ({ name, label, type='text', onChange }) => {
  return (
    <div className="material-textfield field">
            <input 
                placeholder=" " 
                name={name}
                required 
                type={type}
                onChange={onChange}
            />
            <label>{label}</label>            
    </div>
  )
}

export default Input