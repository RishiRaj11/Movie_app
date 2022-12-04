import React from "react";
import Header from "./components/header/Header";
import DataProvider from "./components/context/DataProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import UserLogin from "./components/User/UserLogin";
import Home from './components/home/Home';
const App = () => {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Routes>
        <Route  path="/"  element={<Home />} />
          <Route  path="/admin/login"  element={<AdminLogin />} />
          <Route  path="/user/login"  element={<UserLogin />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
