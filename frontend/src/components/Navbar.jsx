import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    console.log('logout');
  };

  return (
    <nav className='navbar'>
      <h2 className='nav-header' style={{ marginLeft: '30px' }}>
        <Link to='/'>D&D Dungeon Builder</Link>
      </h2>
      <ul>
        <li className='nav-link characters-link'>
          <Link to='/character'>Build Character</Link>
        </li>
        <li className='nav-link monsters-link'>
          <Link to='/monsters'>Monsters</Link>
        </li>
        {userInfo ? (
          <NavDropdown title={userInfo.name} id='username'>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <li className='nav-link dungeons-link'>
            <Link to='/login'>Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
