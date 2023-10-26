import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import store from "./store";
import UserOptions from "./component/layout/Header/UserOptions";

import Home from "./component/Home/Home";
import Map from "./component/Map/Map";
import Header from "./component/layout/Header/Header";
import Sidebar from "./component/Sidebar";
import Landingpage from "./component/Landingpage/Landingpage";
import Studenthome from "./component/Home/Studenthome";
import Footer from "./component/layout/Footer/Footer";
import WebFont from "webfontloader";
import LoginSignUp from "./component/User/LoginSignUp";
//import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  // const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    // store.dispatch(loadUser());
  }, []);

  //window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {/* {isAuthenticated && <UserOptions user={user} />} */}
      <Sidebar>
        <Routes>
          <Route exact path="/" Component={Landingpage}></Route>
          <Route exact path="/home" Component={Home}></Route>
          <Route exact path="/user" Component={Studenthome} />
          <Route exact path="/account" Component={Profile} />

          {/* <Route
            exact
            path="/account"
            Component={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          /> */}

          {/* <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route> */}

          {/* <Route
            exact
            path="/me/update"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/password/update"
            element={
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          />

          <Route exact path="/password/forgot" Component={ForgotPassword} />

          <Route
            exact
            path="/password/reset/:token"
            Component={ResetPassword}
          /> */}

          <Route exact path="/login" Component={LoginSignUp} />
        </Routes>
      </Sidebar>
      <Footer />
    </Router>
  );
}

export default App;
