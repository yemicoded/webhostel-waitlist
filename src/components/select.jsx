import React from "react";
import {IoIosArrowDown} from 'react-icons/io'
import { clx } from "../utils/clx";

export default function Select({
      value,
      label,
      isOpen,
      setOpen,
      options,
      placeholder,
      onclick,
      classname,
      children
}) {
      const classes = clx(
        "flex items-center px-4 py-3 bg-[#EDECEE] rounded-xl",
        classname
      );
      return (
        <div>
          <span className='block font-medium'>{label}</span>
          <div className={classes}>
                        <div className='w-full'>Select</div>
                        <IoIosArrowDown className={isOpen ? 'rotate-180' : 'rotate-0'} onClick={()=>setOpen(state=>!state)} />
          </div>
        </div>
      );
}