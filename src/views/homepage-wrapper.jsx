import React from "react";
import Button from "../components/button";
import Header from "../components/header";
import Modal from "../components/modal";
import SignupForm from "./components/signup-form";

export default function HomepageWrapper() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div>
        <Header />
        <div className='py-10 relative px-3 lg:px-0'>
          <div
            className='flex items-center  delay-700 justify-center lg:block lg:absolute top-0 right-[20px] lg:w-[33%]'
            style={{ animationDuration: "15s" }}
          >
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
              <Button variant='outline' mail='webhostels.ng@gmail.com'>Contact Us</Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onclick={(e) =>e?.target===e?.currentTarget && setModalOpen(false)}
        classname='flex justify-center items-center'
      >
        <SignupForm onclick={() => setModalOpen(false)} />
      </Modal>
    </React.Fragment>
  );
}
