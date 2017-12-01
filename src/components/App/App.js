import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';
import './App.css';

const ROUTES = {
  '/product-list': () => <div>The product list page</div>,
  '/profile': () => <div>The profile page</div>,
  '/': () => <div>The homepage</div>,
  NOT_FOUND: () => <div>The 404 page</div>,
};

class App extends Component {
  render() {
    const { props } = this;

    const BodyPage = ROUTES[props.ui.currentPage] || ROUTES.NOT_FOUND;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">A mock app for Peeping DOM</h1>
          <Link onClick={props.changePage} href="/">Home</Link>
        </header>

        <nav className="App__nav-wrapper">
          <Link onClick={props.changePage} href="/product-list">Product list</Link>
          <Link onClick={props.changePage} href="/profile">Profile</Link>
        </nav>

        <h2>{props.ui.currentPage}</h2>
        <BodyPage />
      </div>
    );
  }
}

App.propTypes = {
  changePage: PropTypes.func.isRequired,
  ui: PropTypes.shape({
    currentPage: PropTypes.string.isRequired,
  }),
};

export default App;
