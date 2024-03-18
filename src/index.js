import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListContainer from "./ListContainer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div className="layout-container__wrapper">
            <p>Normal page</p>
          </div>
        ),
      },
      {
        path: "/course-content",
        element: <ListContainer />,
      },
      {
        path: "/Student",
        element: (
          <div className="layout-container__wrapper">
            <p>Student page</p>
          </div>
        ),
      },
      {
        path: "/assesment",
        element: (
          <div className="layout-container__wrapper">
            <p>assesment</p>
          </div>
        ),
      },
      {
        path: "/forum",
        element: (
          <div className="layout-container__wrapper">
            <p>forum</p>
          </div>
        ),
      },
      {
        path: "*",
        element: (
          <div className="layout-container__wrapper">
            <p>Page Not Found</p>
          </div>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

