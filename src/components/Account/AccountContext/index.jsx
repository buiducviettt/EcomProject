import { useState, createContext } from 'react';

// tạo context bao gồm login logout
export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  //user
  const [user, setUser] = useState(null);
  //login
  const login = (data) => {
    setUser(data);
  };

  //logout
  const logout = () => {
    setUser(null);
  };
  //check user log in chưa
  const isLogin = user ? true : false;

  return (
    <AuthContext.Provider value={{ user, login, logout, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
