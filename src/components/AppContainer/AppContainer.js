import { connect } from 'react-redux';
import { changeSearchQuery } from '../../data/actionCreators';
import App from './App/App';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ui: state.ui,
  products: state.products.filter(product => product.name.toLowerCase().includes(state.ui.query)),
});

const AppContainer = connect(
  mapStateToProps,
  {
    changeSearchQuery,
  }
)(App);

export default AppContainer;
