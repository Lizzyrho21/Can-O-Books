

import './index.css';
import Login from './components/Login'
import Logout from './components/Logout'
import BestBooks from './components/BestBooks'
import Profile from './components/Profile'

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {  isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
    
      {!isAuthenticated ? <Login /> : <Logout /> }
      </header>
      <h1>Just the Login and logout!</h1>
     { isAuthenticated &&
        (
        <div>
          <Profile />
          <BestBooks />
        </div>
        )
        }
        
    </div>
  );
}

export default App;
