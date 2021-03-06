import LoginTitle from '../components/LoginTitle';
import { Link } from 'react-router-dom';
import InputLogin from '../components/InputLogin';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import {useHistory} from 'react-router-dom'
import handleLogin from '../helpers/handleLogin'
const SignUp = () => {
  const { user, setUser } = useContext(UserContext);

  const History = useHistory();

  const HandleLogin = (evt) => {
    evt.preventDefault();
    handleLogin({evt:evt,setUser:setUser,History:History});

  };
  
  return (
    <div className="singup_page">
      <LoginTitle title="sign up" />
      {user.isLoggedIn === false ? (
        <>
          <div className="signup_page_container">
            <form onSubmit={HandleLogin}>
              <InputLogin id="name" type="text" pholder="NAME" />
              <InputLogin id="email" type="email" pholder="EMAIL" />
              <InputLogin id="password" type="password" pholder="PASSWORD" />
              <button className="btn_create_user">CREATE ACCOUNT</button>
            </form>
          </div>
          <div className="account_created">
            <Link className="btn_login" to="/logged">
              Login
            </Link>
          </div>
        </>
      ) : (
        <div className="signup_page_container">
          <h1>is logged {user.name}</h1>
        </div>
      )}
    </div>
  );
};

export default SignUp;
