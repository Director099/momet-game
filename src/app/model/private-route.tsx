import {Navigate, Outlet, useLocation} from "react-router-dom";
import {Links} from "shared/lib/constants";

export const PrivateRoute = ({auth}: {auth: boolean}) => {
  const location = useLocation();
  return auth ? <Outlet /> : <Navigate to={Links.Main} state={{ from: location }} replace />
}
