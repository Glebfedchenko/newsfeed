import React from 'react';
import {Link} from 'react-router-dom';
import AuthButton from '../Auth/AuthButton';
// import Auth from '../Auth/Auth';

// const auth = new Auth();
const Header = () => (
  <header className="header">
    {/* <div className="header__login">
      <Link to="/" onClick={auth.login}>
        Auth0
      </Link>
    </div> */}
    <div>
      <Link to="/">Home</Link>
    </div>
    <div className="header__news">
      <Link to="/news">News</Link>
    </div>
    <div className="header__profile">
      <Link to="/profile">Profile</Link>
    </div>
    <div className="header__login">
      <AuthButton />
    </div>
  </header>
);
export default Header;
