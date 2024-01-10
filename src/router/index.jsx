import { useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Homepage from "@/pages/Homepage";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Page404 from "@/pages/404";

export default function Routes() {
  const [user, setUser] = useState();

  // Router Protected
  function ProtectedRoute({ user, children }) {
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return children;
  }

  console.log(user);

  const element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/login", element: <Login onLogin={setUser} /> },
    {
      path: "/about",
      element: (
        <ProtectedRoute user={user}>
          <About />
        </ProtectedRoute>
      ),
    },
    { path: "*", element: <Page404 /> },
    // {
    //   path: "/posts",
    //   element: <Posts />,
    //   children: [
    //     { index: true, element: <PostLists /> },
    //     { path: ":slug", element: <Post /> },
    //   ],
    // },
  ]);
  return element;
}
