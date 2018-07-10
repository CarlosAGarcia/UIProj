import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImg from './logo.png';

//This is menuItem variable.
//This const variable will be used for navigator of hearder
const MenuItem = ({ active, children, to, className }) => (
  <NavLink to={to} className={className}>
    {children}
  </NavLink>
);

const Header = ({ loggedIn, logout, history }) => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="collapsed navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-9"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <MenuItem to="/" className="navbar-brand">
            <img id="brand" alt="Brand" src={LogoImg} /> ETiCCS
          </MenuItem>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-9"
        >
          <ul className="nav navbar-nav">
            <li><MenuItem to={'/community'}>CommunityUI</MenuItem></li>
            <li><MenuItem to={'/nurse'}>NurseUI</MenuItem></li>
            <li><MenuItem to={'/gynecologist'}>GynecologistUI</MenuItem></li>
            <li><MenuItem to={'/lab/HPVLab'}>HPV Lab</MenuItem></li>
            <li>
              <MenuItem to={'/lab/BiomarkerLab'}>Biomarker Lab</MenuItem>
            </li>
            <li><MenuItem to={'/lab/BiopsyLab'}>Biopsy Lab</MenuItem></li>
            <li>
              <MenuItem to={'/patho/Biomarker'}>Biomarker Patho</MenuItem>
            </li>
            <li><MenuItem to={'/patho/Biopsy'}>Biopsy Patho</MenuItem></li>
            {loggedIn &&
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                    history.push('/');
                  }}
                  href="#"
                >
                  Logout
                </a>
              </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
