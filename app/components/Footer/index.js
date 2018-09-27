import React from 'react';
import LocaleToggle from 'containers/LocaleToggle';

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>React Boilerplate</strong> by Cohan Carpentier
        </p>
        <LocaleToggle />
      </div>
    </footer>
  );
}

export default Footer;
