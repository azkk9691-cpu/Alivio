import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <img src="/img/footer-logo.svg" alt="Alivio" className="footer-logo" />

          <nav className="footer-nav">
            <ul className="footer-list">
              <li><a href="#!">Why Alivio</a></li>
              <li><a href="#!">Solutions</a></li>
              <li><a href="#!">Community</a></li>
              <li><a href="#!">Pricing</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
