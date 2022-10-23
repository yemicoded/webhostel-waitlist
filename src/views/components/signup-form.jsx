import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../../components/button";
import Input from "../../components/input";
import Select from "../../components/select";
import { clx } from "../../utils/clx";

export default function SignupForm({ onclick, classname, children }) {
  const initialValues = {
    firstName: "",
    email: "",
    account_type: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    account_type: Yup.string().required("Please select an account type"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form Values", values);
    resetForm();
    console.log(values.account_type);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const classes = clx(
    "w-[90%] lg:w-[40%] bg-white p-6 rounded-lg relative",
    classname
  );
  return (
    <div className={classes}>
      <MdOutlineCancel
        size={30}
        className='block absolute right-[20px] lg:right-[50px] top-[30px] cursor-pointer'
        onClick={onclick}
      />
      <p className='font-manrope text-primary text-2xl text-center font-semibold py-4 pb-12'>
        Be the first to know
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-4'>
          <Input
            label='First Name'
            placeholder='Enter your name here'
            type='text'
            name='firstName'
            value={formik.values.firstName}
            onchange={formik.handleChange}
            errorMessage={formik.errors.firstName}
            //   onBlur={formik.handleBlur}
          />
          <Input
            label='Email'
            placeholder='Enter your name here'
            type='email'
            name='email'
            value={formik.values.email}
            onchange={formik.handleChange}
            errorMessage={formik.errors.email}
          />
          <Select
            label='How would you like to be involved with the comunity?'
            placeholder='Select an option'
            name='account_type'
            value={formik.values.account_type}
            onchange={formik}
            errorMessage={formik.errors.account_type}
          ></Select>
        </div>
        <Button classname='w-full my-12 text-center' type='submit'>
          Get Notified
        </Button>
      </form>
      <span className='block font-manrope text-xl pb-10 font-medium text-primary text-center'>
        Get notification as soon as our product launch
      </span>
    </div>
  );
}
