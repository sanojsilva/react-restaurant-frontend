import { Navigate } from "react-router-dom";
import { useGlobal } from "../../GlobalContext";

function RequireAuth({ children }) {
  const { user } = useGlobal();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default RequireAuth;
