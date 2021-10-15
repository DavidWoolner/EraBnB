import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import Listings from './listings';

const mSTP = ({ entities, session }) => ({
  listings: Object.values(entities.listings),
  currentUser: entities.users[session.id],
});



const mDTP = (dispatch) => ({
  fetchSearchListings: (query) => dispatch(fetchSearchListings(query)),
  fetchListings: (query) => dispatch(fetchListings(query)),
});

export default connect(mSTP, mDTP)(Listings);