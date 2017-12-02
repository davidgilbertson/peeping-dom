import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from '../../Link/Link';
import ProductList from '../../ProductList/ProductList';
import DetailsPageContainer from '../../DetailsPageContainer/DetailsPageContainer';
import historyManager from '../../../utils/historyManager';
import { captureCurrentUrl } from '../../../peepingDomUtils/utils';
import './App.css';

const ROUTES = {
  '/product-list': ProductList,
  '/profile': () => <div>The profile page</div>,
  '/details': DetailsPageContainer,
  '/': () => <div>The homepage</div>,
  NOT_FOUND: () => <div>404</div>,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathName: props.pathName,
    };
  }

  componentDidMount() {
    // when the URL changes as a result of calling historyManager.push()
    historyManager.onChange((pathName) => {
      this.setState({ pathName });
    });

    // when the URL changes as a result of the user going 'back'
    window.addEventListener('popstate', () => {
      this.setState({ pathName: document.location.pathname });

      captureCurrentUrl();
    });
  }

  render() {
    const { state } = this;

    const BodyPage = ROUTES[state.pathName] || ROUTES.NOT_FOUND;

    return (
      <Fragment>
        <header className="App-header">
          <h1 className="App-title">A mock app for Peeping DOM</h1>
        </header>

        <nav className="App__nav-wrapper">
          <Link
            to="/"
            interactionId="Top nav link: Home"
            className="App__nav-link"
          >
            Home
          </Link>

          <Link
            to="/product-list"
            interactionId="Top nav link: Product list"
            className="App__nav-link"
          >
            Product list
          </Link>

          <Link
            to="/profile"
            interactionId="Top nav link: Profile"
            className="App__nav-link"
          >
            Profile
          </Link>
        </nav>

        <BodyPage {...this.props} />
      </Fragment>
    );
  }
}

App.propTypes = {
  changePage: PropTypes.func.isRequired,
  changeSearchQuery: PropTypes.func.isRequired,
  pathName: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  // ui: PropTypes.shape({
  //   currentPage: PropTypes.string.isRequired,
  // }),
};

export default App;
