import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Post from "./component/Post";
import Profile from "./component/Profile";
import UsersList from "./component/UsersList";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<UsersList />} />

        <Route path="/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
