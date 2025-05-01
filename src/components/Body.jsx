import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Login } from "./Login";
import Browse from "./Browse";
import ErrorPage from "./Error";
import MoviePage from "./MoviePage";
import Header from "./Header";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      element: <AppLayout />, // Wraps Header + nested routes
      children: [
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/movie/:id", // ✅ Accepts movie ID
          element: <MoviePage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
