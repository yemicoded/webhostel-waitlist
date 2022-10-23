import React from "react";
import { clx } from "../utils/clx";

export default function Input({
  value,
  errorMessage,
  required,
  name,
  onclick,
  onchange,
  type,
  label,
  placeholder,
  classname,
  children,
}) {
  const classes = clx("font-dmsans text-base font-medium", classname);
  return (
    <div className={classes} onClick={onclick}>
      <span className='block font-medium text-primary'>{label} {required && <span className="text-red-500">*</span>}</span>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        className='outline-none py-3 px-4 w-full rounded-xl my-1 bg-[#EDECEE]'
      />
      {errorMessage && !value && <p className='text-red-500'>{errorMessage}</p>}
    </div>
  );
}
