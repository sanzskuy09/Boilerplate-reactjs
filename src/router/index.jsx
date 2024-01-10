import { useState } from "react";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";

import Homepage from "@/pages/Homepage";
import About from "@/pages/About";
import Page404 from "@/pages/404";

function Login({ onLogin }) {
  const [creds, setCreds] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    if (creds.username === "admin" && creds.password === "123") {
      onLogin && onLogin({ username: creds.username });
      navigate("/stats");
    }
  }

  function logOut() {
    onLogin(null);
    navigate("/");
  }

  return (
    <div style={{ padding: 10 }}>
      <br />
      <span>Username:</span>
      <br />
      <input
        type="text"
        onChange={(e) => setCreds({ ...creds, username: e.target.value })}
      />
      <br />
      <span>Password:</span>
      <br />
      <input
        type="password"
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>

      <span onClick={logOut} style={{ padding: 5, cursor: "pointer" }}>
        Logout
      </span>
    </div>
  );
}

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
