

import './index.css';
import Login from './components/Login'
import Logout from './components/Logout'
import BestBooks from './components/BestBooks'
import Profile from './components/Profile'
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  NavLink
 } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {  isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
 <div className="App">
      
      <header className="App-header">
      {!isAuthenticated ? <Login /> :  <Logout /> }
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        { isAuthenticated &&
    
        <Route path="users/*" element={<Users />} />}
      </Routes>
    </BrowserRouter>
    </header>
    </div>



        
    
//TODO: REACT ROUTER
     
    

    
        );
}

function Users() {
  /* All <Route path> and <Link to> values in this
     component will automatically be "mounted" at the
     /users URL prefix since the <Users> element is only
     ever rendered when the URL matches /users/*
  */
  return (
    <div>
      <NavLink>
        <Link to="profile">My Profile</Link>
      </NavLink>
      <BestBooks/>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

    //   {/* <h1>Just the Login and logout!</h1>
    // { isAuthenticated &&
    //     (
    //     <div>
    //       <Profile />
    //       <BestBooks />
    //     </div>
    //     )
    //     } */}


    //  {/* A <Switch> looks through its children <Route>s and
    //       renders the first one that matches the current URL. */}
      // <Routes>
      //   <Route path="/profile">
        
        
      //     <Profile />
        
        
        
      //   </Route> 
      //   <Route path="/">
      //  
      //   }
      //   </Route>
      // </Routes>


      // ( <BrowserRouter>
  
      //   <Route>
      //   <Route path="/" element={<App />} />
      //     <Route path="users/*" element={<Users />} />
      //     </Route>
      
      // </BrowserRouter>)

      // <nav>
     
      // <ul>
    

      //     <li>
      //       <Link to="/"> Back to Home</Link>
      //     </li>
      //     <li>
      //       <Link to="/profile">Profile</Link>
      //     </li>
      //     </ul>
      //     </nav>
      //   </header> */}