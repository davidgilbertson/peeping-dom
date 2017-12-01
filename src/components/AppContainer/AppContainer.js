import { connect } from 'react-redux';
import { changePage } from '../../data/actionCreators';
import App from '../App/App';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ui: state.ui,
});

const AppContainer = connect(
  mapStateToProps,
  {
    changePage,
  }
)(App);

export default AppContainer;
