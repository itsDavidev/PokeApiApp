import InputLogin from '../components/InputLogin';
import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <div className="login_page">
      <div className="login_container">
        <InputLogin type="email" pholder="EMAIL" />
        <InputLogin type="password" pholder="PASSWORD" />
      </div>
      <div className="login_create">
        <Link to='/'>LOGIN</Link>
        <Link to='/singup'>CREATE ACCOUNT</Link>
      </div>
    </div>
  );
};

export default Login;