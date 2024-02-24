import { Field, Form, Formik, useField } from "formik";
import { useState } from "react";
import CustomDatePicker from "./CustomDatePicker";
import * as Yup from "yup";

const inputContainerStyle = `flex flex-col justify-center items-start w-full`;

const AppointmentSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  age: Yup.number().max(99).min(1).required("Required"),
  gender: Yup.string().required("Required"),
  date: Yup.date().required("Required"),
});

const FormData = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        gender: undefined,
        age: undefined,
        date: new Date(),
      }}
      validationSchema={AppointmentSchema}
      onSubmit={(c) => console.log(c)}
      className="flex flex-col justify-center items-center gap-2"
    >
      {({ values, errors, touched }) => (
        <Form>
          <div className={`${inputContainerStyle}`}>
            <label htmlFor="username" className="font-normal mb-0">
              Name
            </label>
            <Field
              className="p-2 m-0"
              value={values.name}
              id="name"
              type="text"
              placeholder="Enter your name transition-all"
            />
            {errors.name && touched.name ? (
              <p className="text-red-400 text-sm transition-all">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className={`${inputContainerStyle}`}>
            <label htmlFor="username" className="font-normal mb-0">
              email
            </label>
            <Field
              className="p-2 m-0"
              value={values.email}
              id="email"
              type="text"
              placeholder="Enter your email"
            />
            {errors.email && touched.email ? (
              <p className="text-red-400 text-sm">{errors.email}</p>
            ) : null}
          </div>

          <div className="w-full flex flex-wrap justify-between">
            <div className={`${inputContainerStyle}`}>
              <label htmlFor="username" className="font-normal mb-1">
                Age
              </label>
              <Field
                className="p-2 m-0"
                value={values.age}
                id="age"
                type="text"
                placeholder="Enter your age"
              />
              {errors.age && touched.age ? (
                <p className="text-start text-red-400 w-full text-sm transition-all">
                  {errors.age}
                </p>
              ) : (
                <p className="mt-3"></p>
              )}
            </div>
            <div className={`${inputContainerStyle}`}>
              <label id="my-radio-group">gender</label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className="w-full flex justify-start items-center gap-3"
              >
                <label
                  className={` transition-all duration-200 ${
                    values.gender == "male" ? "bg-zinc-400 " : ""
                  } border-[#4a5568] border-2 font-normal m-0 rounded-lg min-w-16 h-10 cursor-pointer flex justify-center items-center px-3 bg-[#2d3748]`}
                >
                  <Field
                    className="hidden"
                    type="radio"
                    name="gender"
                    value="male"
                  />
                  Male
                </label>
                <label
                  className={` transition-all duration-200 ${
                    values.gender == "female" ? "bg-zinc-400 " : ""
                  } border-[#4a5568] border-2 font-normal m-0 rounded-lg min-w-16 h-10 cursor-pointer flex justify-center items-center px-3 bg-[#2d3748]`}
                >
                  <Field
                    className="hidden"
                    type="radio"
                    name="gender"
                    value="female"
                  />
                  Female
                </label>
              </div>
              {errors.gender && touched.gender ? (
                <p className="text-start text-red-400 w-full text-sm transition-all">
                  {errors.gender}
                </p>
              ) : (
                <p className="mt-3"></p>
              )}
            </div>
          </div>

          <div className={`${inputContainerStyle}`}>
            <label>Date</label>
            <CustomDatePicker name="date" />
            {errors.date && touched.date ? (
              <p className="text-start text-red-400 w-full text-sm transition-all">
                {errors.date}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-cyan-600 text-white p-2 rounded-md mt-5 hover:bg-cyan-500 transition-all duration-200"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default FormData;
