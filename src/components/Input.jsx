import React from 'react';
 
const Input = ({ label, type='text', ...rest}) => {

  return (
    <div className="material-textfield field">
            <input 
                {...rest}
                placeholder=" " 
                type={type}
                required 
            />
            <label>{label}</label>            
    </div>
  )
}

export default Input