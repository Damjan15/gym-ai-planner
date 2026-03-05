import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, isLoading } = useAuth();
  const plan = false; // temporary

  if (!user && !isLoading) {
    return <Navigate to="/profile" replace />;
  }

  if (!plan) {
    return <Navigate to="/onboarding" replace />;
  }

  return <div>Profile page</div>;
}
