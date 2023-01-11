import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Login from './components/Login/Login.jsx'
import Header from './components/Header/Header.jsx'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Header></Header>
          <Dashboard></Dashboard>
          <Footer></Footer>
        </div>
      )
    },
    {
      path: '/login',
      element: (
        <div>
          <Navbar></Navbar>
          <Login></Login>
          <Footer></Footer>
        </div>
      )
    },
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
