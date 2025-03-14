import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CrudViewPage = () => {
  const { id } = useParams();

  console.log("Received ID:", id);

  const [user, setUser] = useState({ address: {} });

  console.log("1. View Page Rendering Started...");

  useEffect(() => {
    // will be called after initial rendering
    // ideal place for api call
    console.log("3. Inside useEffect");
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("It is over");
      });
  }, []); // dependency list

  console.log("2. View Page Rendering Completed");

  return (
    <div>
      <h2 className="text-center">User Details</h2>

      <div className="col-md-4" key={user.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Phone: {user.phone}
            </h6>
            <p className="card-text">E-Mail: {user.email}</p>
            <p className="card-text">
              Address: {user.address.street} {user.address.suite}{" "}
              {user.address.city} {user.address.zipcode}
            </p>
            <p className="card-text">Website: {user.website}</p>
          </div>
        </div>
      </div>

      <Link to="/crud" className="btn btn-primary m-3">
        Back
      </Link>
    </div>
  );
};

export default CrudViewPage;
