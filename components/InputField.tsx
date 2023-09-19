import React from 'react'

const InputField = ({props}) => {
    const {myLabel, type, name, value, onChange} = props; 
  return (
    <div>
        <label>
            {myLabel}
            <input type={type} name={name} value={value} onChange={onChange} />
        </label>
    </div>    
  )
}

export default InputField