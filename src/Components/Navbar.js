import React from 'react';
import { NavLink } from 'react-router-dom';
import GitHubContext from '../context/gitHub/gitHubContext';

const Navbar = () => {
  const { user } = React.useContext(GitHubContext);
  console.log('navbar', user);
  return (
    <nav className={'navbar navbar-dark bg-primary navbar-expand-lg'}>
      <div className={'navbar-brand'}>GH SEARCH</div>
      <ul className={'navbar-nav'}>
        <li className={'navbar-item'}>
          <NavLink exact to={'/'} className={'nav-link'}>
            HOME
          </NavLink>
        </li>
        {user.login && (
          <li className={'nav-item'}>
            <NavLink to={`/profile/${user}`} className={'nav-link profile'}>
              PROFILE
            </NavLink>
          </li>
        )}
        <li className={'nav-item'}>
          <NavLink to={'/about'} className={'nav-link'}>
            INFO
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
