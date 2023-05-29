import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer(props) {
  return (
    <footer className="footer fixed-bottom text-end">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <span style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Made By Sarthak Lamba</span>
          <div className="mt-3">
            <a href="https://github.com/sarthaklambaa" target="_blank" rel="noopener noreferrer" className="footer-icons">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/sarthaklambaa" target="_blank" rel="noopener noreferrer" className="footer-icons">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
