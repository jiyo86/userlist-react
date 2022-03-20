import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../redux/store";
import { addUser } from "../redux/userActionCreator";

import "./UserAdd.css";

interface IFormInput {
  firstname: string;
  lastname: string;
  email: string;
}

export const UserAdd = () => {
  const dispatch = useDispatch();

  const formStatedata = useSelector(
    (state) => (state as ApplicationState).form
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    dispatch(addUser(data));
  };

  return (
    <>
      <h1 className="heading">Add User</h1>
      <div className="useradd-page">
        <div className="jumbotron">
          {formStatedata.success && (
            <div className="alert alert-primary">
              <p>User added Sccessfully</p>
            </div>
          )}
          {formStatedata.error && (
            <div className="alert alert-error">
              <p>{formStatedata.error}</p>
            </div>
          )}
          <form className="adduser" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>First Name</label>
              <input
                {...register("firstname", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 20,
                })}
                className="form-control"
              />
              {errors?.firstname?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.firstname?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
              )}
              {errors?.firstname?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                {...register("lastname", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 20,
                })}
              />
              {errors?.lastname?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.lastname?.type === "maxLength" && (
                <p>Last name cannot exceed 20 characters</p>
              )}
              {errors?.lastname?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/i,
                })}
                className="form-control"
              />
              {errors?.email?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.email?.type === "pattern" && <p>Eneter a valid email</p>}
            </div>
            <input type="submit" value="Add User" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </>
  );
};
