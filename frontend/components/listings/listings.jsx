import React  from "react";
import {ListingIndexItem} from './listing_index_item';
import  MapContainer from '../map/map_container';

class Listings extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListings({city: this.props.match.params.city});
    }


    render() {
        
        const listings = this.props.listings.map((listing) => (
            <ListingIndexItem key={listing.id} listing={listing} />
        ));

        return (
            <div className="listing-map-flex">
                <div className="listings-container">
                    {listings}
                </div>
                <MapContainer />
            </div>
        )
    }
}



export default Listings;