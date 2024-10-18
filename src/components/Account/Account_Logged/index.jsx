import { useContext } from 'react';
import DefaultLayout from '../../Layout/Default Layout';
import { AuthContext } from '../AccountContext';
const AccountLogged = () => {
  const { user } = useContext(AuthContext);
  return (
    <DefaultLayout>
      <div className="container">
        <h1>Account Info</h1>
        {
          user ? (
            <>
          <>
            <p>Username: {user.username}</p>
            <p>Country: {user.country}</p> 
            <p>Phone: {user.phone}</p> 
            <p>Email: {user.email}</p> 
          </>
            </>
          ): (<p>No user information available.</p>)
              }
    </div>

  </DefaultLayout >
  )
};
export default AccountLogged;
