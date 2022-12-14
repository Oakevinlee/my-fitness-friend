import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
 return (
    <nav className='navbar'>
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="/">A B O U T</Link>
      &nbsp; | &nbsp;
      <Link to="/foods/new">Track Food</Link>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}