import React from "react";
import Menu from "./Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import './App.css';

const React_route = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Menu /><Home /></>
        },
        {
            path: "/about",
            element: <><Menu /><About /></>
        },
        {
            path: "/contact",
            element: <><Menu /><Contact /></>
        },
        {
            path: "/user/:username",
            element: <><Menu /><User /></>
        }
    ])
    return (
        <div>
            <h1>My Website</h1>
            <RouterProvider router={router} />
        </div>
    )
}
export default React_route;