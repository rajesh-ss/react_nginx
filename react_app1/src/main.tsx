// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "demo",
        element:<>I am lucky it works fine, hurray</>,
      },
      {
        path: 'party',
        element: <>It works Bro </>
      }
    ],
  },

],
{
  basename: "/app1/",
}
);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
