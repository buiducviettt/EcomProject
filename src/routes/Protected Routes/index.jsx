import { useContext } from 'react';
import { AuthContext } from '../../components/Account/AccountContext';
import { Navigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component: Component }) => {
  const { isLogin } = useContext(AuthContext);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};
export default ProtectedRoute;
