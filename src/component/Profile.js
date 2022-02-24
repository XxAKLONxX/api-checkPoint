import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import Post from "./Post";

function Profile() {
const match = useMatch('/:id')
const [profile, setProfile] = useState()
const [error, setError] = useState(null)

useEffect(() => {
  axios
  .get(`https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`)
  .then((res) => setProfile(res.data))
  .catch((err) => setError(err));
}, []);
console.log(match.params.id);


  return (
    <div  style = {{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
      
       {error ? (
        <p>not yet !! </p>
      ) : (
        profile && profile.map((el) => <Post z={el} key={el.id} />)
      )}
        
    </div>
  );
}

export default Profile;
