import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import { useHistory } from 'react-router-dom';
import StateInitial from '../helpers/StateInitial';
const Logout = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  
  const handleLogout = () => {
    localStorage.removeItem('AuthUser');
    setUser(StateInitial);
    history.push('/login');
  };

  return(
    <div className='logout'>
      <h1>Logout</h1>
      <p>logged out</p>
      <button onClick={handleLogout} className="btn_primary">Logout</button>
    </div>
  );
};


export default Logout;