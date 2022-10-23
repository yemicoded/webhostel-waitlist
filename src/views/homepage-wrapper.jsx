import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../components/button";
import Header from "../components/header";
import Input from "../components/input";
import Modal from "../components/modal";
import Select from "../components/select";

export default function HomepageWrapper() {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <React.Fragment>
      <div>
        <Header />
        <div className='py-10 relative px-3 lg:px-0'>
          <div className='flex items-center justify-center lg:block lg:absolute top-0 right-[20px] lg:w-[33%]'>
            <img src='/images/grouped-img.png' alt='' />
          </div>
          <h1 className='text-primary font-garamond text-[54px] lg:text-[64px] lg:w-[65%] text-center'>
            We help bridge the gap between agents and you.
          </h1>
          <div className='lg:px-[4%]'>
            <article className='text-primary text-[18px] md:text-[32px] font-manrope text-center lg:text-left font-medium lg:w-[60%] py-[40px]'>
              We are building a web app that eliminate the problem of hostel
              hunting among Nigerian undergraduates, and enables you to get a
              budget friendly and satisfactory hostel.
            </article>
            <p className='text-primary font-manrope font-medium text-[32px] text-center lg:text-left py-[20px]'>
              We are starting with Obafemi Awolowo University, Ile-Ife.
            </p>
            <div className='flex items-center flex-col md:flex-row lg:w-[60%] justify-center gap-6'>
              <Button variant='primary' onclick={() => setModalOpen(true)}>
                Join our waitlist
              </Button>
              <Button variant='outline'>Contact Us</Button>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} classname='flex justify-center items-center'>
        <div className='w-[90%] lg:w-[40%] bg-white p-6 rounded-lg relative'>
          <MdOutlineCancel
            size={30}
            className='block absolute right-[20px] lg:right-[50px] top-[30px] cursor-pointer'
            onClick={() => setModalOpen(false)}
          />
          <p className='font-manrope text-primary text-2xl text-center font-semibold py-4 pb-12'>
            Be the first to know
          </p>
          <div className='flex flex-col gap-4'>
            <Input
              label='First Name'
              placeholder='Enter your name here'
              type='text'
            />
            <Input
              label='Email'
              placeholder='Enter your name here'
              type='email'
            />
            <Select
                                      label='How would you like to be involved with the comunity?'
                                      placeholder='Select an option'
            ></Select>
          </div>
          <Button classname='w-full my-12 text-center'>Get Notified</Button>
          <span className='block font-manrope text-xl pb-10 font-medium text-primary text-center'>
            Get notification as soon as our product launch
          </span>
        </div>
      </Modal>
    </React.Fragment>
  );
}
