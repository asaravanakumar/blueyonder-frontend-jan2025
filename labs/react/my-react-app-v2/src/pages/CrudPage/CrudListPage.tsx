import axios from "axios";
import React, { use, useState } from "react";
import { useEffect } from "react";
import SummaryCard from "../../components/Card/SummaryCard";
import { Link } from "react-router-dom";

const CrudListPage = () => {
  // Make use of useEffect to fetch data from the server using axios

  const [users, setUsers] = useState([]);

  console.log("1. Rendering Started...");

  useEffect(() => {
    console.log("3. Fetching Started...Fetching Data...");
    // fetch data from the server
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data); // update the state with the fetched users data
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("4. Fetching Finished...");
      });
  }, []);

  console.log("2. Rendering Finished...");

  return (
    <>
      <h4 className="text-center">Users</h4>
      <div className="text-center">Total Users: {users.length}</div>
      {/* <div className="text-left mx-4 px-6">

      </div> */}
      <div className="container mt-4">
        <Link to={`/crud/add`} className="btn btn-primary">
          Add User
        </Link>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
          {users.map((user) => {
            return (
              <div className="col" key={user.id}>
                <SummaryCard user={user} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CrudListPage;
