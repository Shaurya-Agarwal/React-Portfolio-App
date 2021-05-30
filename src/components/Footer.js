import React from 'react';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h1 className='footer-subscription-heading'>
          Add me on your social media!!!!!
        </h1>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <div className='social-logo'>
              Shaurya Agarwal
            </div>
          </div>
          <small class='website-rights'>SHAURYA © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/shaurya.agarwal.501/'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/_shaurya.agarwal_/?hl=en'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/Shaurya73448385'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/shaurya-agarwal-170401/'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link github'
              href='https://github.com/Shaurya-Agarwal'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;