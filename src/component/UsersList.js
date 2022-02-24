import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";

function UsersList() {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    axios

      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data))
      .catch((err) => setError(err));
  }, []);
console.log(user);

  return (
    <div>
    <h1 style = {{display:'flex',justifyContent:'center'}}> User's List </h1>
    <div style = {{display:'flex',flexWrap : 'wrap',justifyContent:'space-around'}}>
      
      {error ? (
        <p>not yet !! </p>
      ) : (
        user && user.map((el) => <User x={el} key={el.id} />)
      )}
    </div></div>
  );
}

export default UsersList;
