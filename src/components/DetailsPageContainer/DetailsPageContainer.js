import { connect } from 'react-redux';
import DetailsPage from './DetailsPage/DetailsPage';

const mapStateToProps = (state, ownProps) => {
  const url = new URL(document.location.href);

  const productId = url.searchParams.get('productId');

  return {
    ...ownProps,
    product: state.products.find(product => product.id === productId),
  };
};

const DetailsPageContainer = connect(
  mapStateToProps,
)(DetailsPage);

export default DetailsPageContainer;
