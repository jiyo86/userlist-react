import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../redux/userActionCreator";
import { ApplicationState } from "../redux/store";
import { userType } from "../redux/userReducer";
import { Spinner } from "react-bootstrap";
import { Dispatch } from "redux";

export const UserList = (): JSX.Element => {
  const userlist = useSelector((state) => (state as ApplicationState).user);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(fetchUserList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <h1 className="heading">User List</h1>
      <div className="userlist">
        <div className="grid">
          {userlist.loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : userlist?.data.length > 0 ? (
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>First Name</th>
                  <th>Last Name Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {userlist?.data?.map((user: userType, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{user?.firstname}</td>
                      <td>{user?.lastname}</td>
                      <td>{user?.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h3>User List is not available</h3>
          )}
          <div className="">
            <button className="btn btn-primary">
              <Link to="/add-user">Add New user</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
