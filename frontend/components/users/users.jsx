import React from "react";
import { Link, Redirect } from "react-router-dom";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    const listings = currentUser.user_listing.map((listing) => (
      <Link to={`/listings/${listing.id}`}>
        <h3 key={listing.id}>{listing.title}</h3>
      </Link>
    ));

    return (
      <div key={currentUser.id} className="user-profile-container">
        <h1>Hello, {currentUser.first_name}!</h1>
        <h2>Email: {currentUser.email}</h2>
        <h3>Bio: {currentUser.bio}</h3>

        <h2>Your listings: </h2>
        {listings}
        <br />
        <Link to="/new/listing">
          <h3>Create a New Listing</h3>
        </Link>
      </div>
    );
  }
}

export default Users;
