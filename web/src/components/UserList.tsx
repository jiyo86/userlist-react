import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserList } from "../redux/userActionCreator";
import { ApplicationState } from "../redux/store";
import { userType } from "../redux/userReducer";

export const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: ApplicationState) => state.user);
  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch, userList]);

  return (
    <>
      <h1 className="heading">User List</h1>
      <div className="container">
        <div className="row">
          <div className="grid">
            {userList?.data.length > 0 ? (
              <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {userList.data.map((user: userType, index: number) => {
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
          </div>
        </div>
        <button className="btn btn-primary">
          <Link to="/add-user">Add New user</Link>
        </button>
      </div>
    </>
  );
};
