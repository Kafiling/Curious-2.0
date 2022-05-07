import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {AiTwotoneExperiment} from 'react-icons/ai'
function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <AiTwotoneExperiment className='navbar-icon' />
              Curious
            </Link>
          </div>
          <small className='website-rights'>Curious Project</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
