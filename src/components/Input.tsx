import React, { ChangeEvent } from 'react'

interface InputProps {
 type: string
 id?: string
 name?: string
 value?: string | number
 placeholder?: string
 required?: boolean
 disabled?: boolean
 accept?: string
 label?: string
 className?: string
 onChange?: (event: ChangeEvent<HTMLInputElement>) => void
 onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
 type,
 id,
 name,
 value,
 placeholder,
 required,
 disabled,
 className,
 label,
 accept,
 onChange,
 onBlur,
}) => {
 return (
  <>
   <label
    className={`block text-white text-sm font-bold mb-2 ${label ? 'block' : 'hidden'}`}
   >
    {label}
   </label>
   <input
    type={type}
    id={id}
    name={name}
    accept={accept}
    value={value}
    placeholder={placeholder}
    required={required}
    disabled={disabled}
    onChange={onChange}
    onBlur={onBlur}
    className={` ${className} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
   />
  </>
 )
}

export default Input
