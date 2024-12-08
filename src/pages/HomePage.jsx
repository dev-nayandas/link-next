import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router'

const HomePage = () => {
    const {auth} = useAuth();
    console.log(auth);
  return (
    <div>
      <p>HomePage</p>
      <Link to="/ProfilePage">Go to Profile Page</Link>
    </div>
  )
}

export default HomePage