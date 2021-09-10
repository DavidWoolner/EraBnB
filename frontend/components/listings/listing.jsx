import React from "react";
import { Link } from "react-router-dom";

class Listing extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  render() {
    // debugger
    if (!this.props.listing) {
        return null;
    }
    const {currentUser, listing} = this.props;
    const showEdit = currentUser === listing.host_id ? <button onClick={()=>this.props.deleteListing(listing.id).then(res => this.props.history.push(`/users/${currentUser}`))}>Delete</button> : null 

    return (
      { listing } && (
        <div className="listing-item-show">
          <img
            src="https://media.architecturaldigest.com/photos/5fdba5629542eda0bedf1080/master/w_1280%2Cc_limit/60d85131-b43f-4edb-8051-28c0e6bd377a.jpg"
            alt="listing-photo"
          />
          <div className="listing-info-show">
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>${listing.price}/night</p>
            <p>
              Bedrooms {listing.num_bedrms}{" "}
              <span> Bathrooms {listing.num_baths}</span>
            </p>
            {showEdit}
            <Link to="/listings/">
              <button>Back to Listings</button>
            </Link>
          </div>
        </div>
      )
    );
  }
}

export default Listing;
