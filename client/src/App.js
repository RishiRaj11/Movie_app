import React, { useContext } from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import UserLogin from "./components/User/UserLogin";
import Home from "./components/home/Home";
import { DataContext } from "./components/context/DataProvider";
import AddMovie from "./components/User/AddMovie";

const App = () => {
  const { account } = useContext(DataContext);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {account.email && account.userType === "Admin" ? (
            <Route path="/admin/login" element={<AdminLogin />} exact />
          ) : (
            <Route path="/" element={<Home />} exact />
          )}

          {account.email && account.userType === "User" ? (
            <Route path="/user/login" element={<UserLogin />} exact />
          ) : (
            <Route path="/" element={<Home />} exact />
          )}
        </Routes>
      </Router>
      {/* <AddMovie /> */}
    </>
  );
};

export default App;
