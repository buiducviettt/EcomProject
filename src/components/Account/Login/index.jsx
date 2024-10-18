import DefaultLayout from '../../Layout/Default Layout';
import styles from './login.module.scss';
import Button from '../../Button';
import { AuthContext } from '../AccountContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassWord] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    // tao tai khoan mat khau admin 
   
    const userData = 'buiducviet';
    const passwordData = 'buiducviet';
    const someInfo =
      {
        country: "Bà Rịa",
        phone: "111111111",
        email: "buiducviet@gmail.com",
      }
    
    if (username === userData && password === passwordData) {
      // đăng nhập thành công 
      const user = {
        username: userData,
        country: someInfo.country,
        phone: someInfo.phone,
        email: someInfo.email,
      }
      localStorage.setItem('user', JSON.stringify(user));
      setError('');
      // gọi phương thức 
      login(user);

      navigate('/');// về HOME
    } else {
      setError("Username or Password is incorrect!")
    }

  }
  return (
    <DefaultLayout>
      <div className={`container ${styles.title}`}>
        <h1> Login </h1>
        <div className={styles.inputTable}>
          <div className={styles.inner}>
            <label htmlFor="">Username : buiducviet  </label>
            <input type="text" value={username} className='form-control'  onChange={(e) => setUsername(e.target.value)}  placeholder='Type the username' />
            <label htmlFor="">Password :buiducviet </label>
            <input type="password" value={password} className='form-control'   onChange={(e) => setPassWord(e.target.value)} placeholder='Type the password' />
            {/*Nếu có lỗi */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button
              onClick={handleSubmit}
              className={styles.submit}
              actionName="Log in" />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Login;
