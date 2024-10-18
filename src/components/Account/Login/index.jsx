import DefaultLayout from '../../Layout/Default Layout';
import styles from './login.module.scss';
const Login = () => {
  return (
    <DefaultLayout>
      <div className={`container ${styles.title}`}>
        <h1> Login </h1>
      </div>
    </DefaultLayout>
  );
};
export default Login;
