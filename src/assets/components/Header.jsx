import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <a href="#!">
              <img src="/img/logo.svg" alt="Alivio" />
            </a>
          </div>

          <nav className="header-nav">
            <ul>
              <li><a href="#!">Why Alivio</a></li>
              <li><a href="#!">Solutions</a></li>
              <li><a href="#!">Community</a></li>
              <li><a href="#!">Pricing</a></li>
            </ul>
          </nav>

          <div className="header-login">
            <a href="#!" className="header-login-link">Sign in</a>
            <a href="#!" className="btn">Start Trial</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
