import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import "./UserAdd.css";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
}

export const UserAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="container">
      <div className="jumbotron">
        <div className="row">
          <h1 className="heading">Add User</h1>
        </div>
        <div className="row">
          <form className="adduser" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>First Name</label>
              <input
                {...register("firstName", {
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 20,
                })}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                {...register("lastName", {
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 20,
                })}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input {...register("email")} className="form-control" />
            </div>
            <input type="submit" value="Add User" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};
