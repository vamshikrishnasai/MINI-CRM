import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "@/pages/login"
import SignupPage from "@/pages/signup"
import Dashboard from "@/pages/dashboard"
import NavBar from "@/components/navBar"
import { useAuth } from "@/contexts/AuthContext"

export default function AppRoutes() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="text-center p-10 text-lg">Loading...</div>
  }

  return (
    <>
      {user && <NavBar />}

      <Routes>
        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />

        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignupPage /> : <Navigate to="/dashboard" />}
        />

        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="*"
          element={
            <div className="text-center p-10 text-2xl">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </>
  )
}
