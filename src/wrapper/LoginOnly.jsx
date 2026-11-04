import { Navigate } from "react-router-dom";

const LoginOnly = () => {
  const { connected, user } = useAuth();

  if (!connected) return <Navigate to="/login" replace />;

  return children;
};

export default LoginOnly;
