import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Button from './../Button';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <NavBar>
        <Link href="/" to="/">
          <Button>
            <FormattedMessage {...messages.home} />
          </Button>
        </Link>
        <Link href="/features" to="/features">
          <Button>
            <FormattedMessage {...messages.features} />
          </Button>
        </Link>
      </NavBar>
    );
  }
}

export default Header;
