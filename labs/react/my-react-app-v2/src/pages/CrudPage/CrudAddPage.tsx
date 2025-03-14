import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IUser from "../../modal/IUser";
import axios from "axios";

const CrudAddPage = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  // return (
  //   /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     {/* register your input into the hook by invoking the "register" function */}
  //     <input defaultValue="test" {...register("example")} />

  //     {/* include validation with required or other standard HTML validation rules */}
  //     <input {...register("exampleRequired", { required: true })} />
  //     {/* errors will return when field validation fails  */}
  //     {errors.exampleRequired && <span>This field is required</span>}

  //     <input type="submit" />
  //   </form>
  // );

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  // validate the form data
  // Collect the form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const handleAddUser = (formData: IUser) => {
    console.log(formData);
    // on click of the submit button
    // send the form data to the rest api
    // what's the REST API URL? https://jsonplaceholder.typicode.com/users
    // what's the Http Method? POST
    // what's the REST API Client? Axios
    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((response) => {
        // upon successful response
        console.log(response);
        setIsSuccess(true);
      })
      .catch((err) => {
        // upon error this will be executed)
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        console.log("It is over!");
      });
  };

  return (
    <div>
      <h3 className="text-center">Add User</h3>
      <form
        className="col-md-6 offset-md-3"
        onSubmit={handleSubmit(handleAddUser)}
      >
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="nameInput">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="nameInput"
              className="form-control"
              placeholder="Enter Name"
              {...register("name", {
                required: "Name is required",
                maxLength: 20,
              })}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="phoneInput"
              className="form-control"
              placeholder="Enter Phone"
              {...register("phone", {
                required: "Phone no is required",
                maxLength: 10,
              })}
            />
            {errors.phone && (
              <p className="text-danger">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="emailInput" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              id="emailInput"
              className="form-control"
              placeholder="Enter Email"
              {...register("email", { required: "Email id is required" })}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
        </div>

        {isSuccess && (
          <div className="alert alert-success">Saved Successfully.</div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Some Error Occurred. Try again later!
          </div>
        )}

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CrudAddPage;
