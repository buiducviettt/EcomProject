import { useContext } from 'react';
import { AuthContext } from '../../components/Account/AccountContext';
import { Navigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { isLogin } = useContext(AuthContext);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default ProtectedRoute;
