import { useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import ErrorPage from "@/pages/ErrorPage";

// Route Dashboard Monitoring
import Overdue from "@/pages/Menu/DashboardMonitoring/Overdue";
import MoveTo from "@/pages/Menu/DashboardMonitoring/MoveTo";

export default function Routes() {
  const [user, setUser] = useState(true);

  // Router Protected
  function ProtectedRoute({ user, children }) {
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return children;
  }

  const element = useRoutes([
    { path: "/", element: <Dashboard /> },
    {
      path: "/dashboard/overdue",
      element: (
        <ProtectedRoute user={user}>
          <Overdue />
        </ProtectedRoute>
      ),
    },
    {
      path: "/dashboard/move-to",
      element: (
        <ProtectedRoute user={user}>
          <MoveTo />
        </ProtectedRoute>
      ),
    },
    { path: "/login", element: <Login onLogin={setUser} /> },
    { path: "*", element: <ErrorPage /> },
    // {
    //   path: "invoices",
    //   element: <Invoices />,
    //   children: [
    //     {
    //       index: true,
    //       element: (
    //         <ProtectedRoute user={user}>
    //           <About />
    //         </ProtectedRoute>
    //       ),
    //     },
    //     { path: ":id", element: <Invoice /> },
    //     { path: "sent", element: <SentInvoices /> },
    //   ],
    // },
  ]);

  return element;
}
