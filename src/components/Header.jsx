import React from 'react';

function Header() {
  return (
    <>
      <header className="header">
        <img className="logo" src="/img/logo-img.png" alt="logo" />
        <ul className="navbar">
          <li><a href="#">Discover</a></li>
          <li><a href="#">My Plants</a></li>
          <li><a href="#">Diseases</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <div className="profile">
          <input className="profile-search" type="text" />
          <img className="menu" src="/img/menu.png" alt="menu" />
          <img className="profile-img" src="/img/profile.png" alt="profile"/>
        </div>
      </header>
    </>
  );
}

export default Header;