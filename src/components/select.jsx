import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { clx } from "../utils/clx";

export default function Select({
  label,
  isOpen,
  setOpen,
  name,
  errorMessage,
  onchange,
  value,
  required,
  options,
  placeholder,
  onclick,
  classname,
  children,
}) {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleSelect = (option) => {
    onchange.values[name] = option;
    setSelectedOption(option);
    setOpen(false);
  };

  const classes = clx(
    "flex items-center px-4 py-3 my-1 bg-[#EDECEE] rounded-xl relative",
    classname
  );

  return (
    <div onClick={onclick}>
      <span className='block font-medium text-primary font-dmsans text-base'>
        {label} {required && <span className='text-red-500'>*</span>}
      </span>
      <div className={classes}>
        <div className='w-full font-medium font-dmsans'>
          {selectedOption ? selectedOption : placeholder}
        </div>
        <IoIosArrowDown
          className={`${isOpen ? "rotate-180" : "rotate-0"} cursor-pointer`}
          onClick={()=>setOpen((state) => !state)}
        />

        {isOpen && (
          <div className='absolute top-[105%] left-0 w-full shadow-xl rounded-xl bg-white h-fit  overflow-hidden'>
            <div
              className='flex gap-4 items-center border-b-2 border-black px-6 py-4 hover:bg-[#EDECEE] cursor-pointer'
              data-value='Agent'
              onClick={() => handleSelect("Agent")}
            >
              <BiUserCircle className='text-3xl block' />
              <div>
                <h2 className='text-[18px] font-medium text-[#4F4F4F]'>
                  Agent
                </h2>
                <span className='block text-[#4F4F4F] text-[14px]'>
                  Register as an agent, post available spaces and find tenants
                </span>
              </div>
            </div>
            <div
              className='flex gap-4 items-center px-6 py-4  hover:bg-[#EDECEE] cursor-pointer'
              data-value='Client'
              onClick={() => handleSelect("Client")}
            >
              <BiUserCircle className='text-3xl block' />
              <div>
                <h2 className='text-[18px] font-medium text-[#4F4F4F]'>
                  Client
                </h2>
                <span className='block text-[#4F4F4F] text-[14px]'>
                  Register as a client, connect with agents and find nice spaces
                  for rent
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      {errorMessage && !selectedOption && (
        <p className='text-red-500'>{errorMessage}</p>
      )}
    </div>
  );
}
