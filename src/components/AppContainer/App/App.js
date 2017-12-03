import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from '../../Link/Link';
import ProductList from '../../ProductList/ProductList';
import JourneyPlayback from '../../JourneyPlayback/JourneyPlayback';
import DetailsPageContainer from '../../DetailsPageContainer/DetailsPageContainer';
import historyManager from '../../../utils/historyManager';
import { captureCurrentUrl } from '../../../peepingDomUtils/utils';
import './App.css';

const ROUTES = {
  '/product-list': ProductList,
  '/profile': () => <h1>The profile page</h1>,
  '/details': DetailsPageContainer,
  '/': () => <h1>The homepage</h1>,
  NOT_FOUND: () => <h1>404</h1>,
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

    if (state.pathName === '/playback') {
      // so dodgy
      return <JourneyPlayback />;
    }

    const BodyPage = ROUTES[state.pathName] || ROUTES.NOT_FOUND;

    return (
      <Fragment>
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
  changeSearchQuery: PropTypes.func.isRequired,
  pathName: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  query: PropTypes.string,
};

export default App;
