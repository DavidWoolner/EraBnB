import * as APIListingUtil from '../util/listings_api_util'

export const RECEIVE_ALL_LISTINGS = `RECEIVE_ALL_LISTINGS`;
export const RECEIVE_LISTING = `RECEIVE_LISTING`;
export const REMOVE_LISTING = `REMOVE_LISTING`;

const receiveAllListings = listings => ({
    type: RECEIVE_ALL_LISTINGS,
    listings    
});

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
});

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
})

export const fetchListings = () => dispatch => (
    APIListingUtil.fetchListings()
    .then( listings => dispatch(receiveAllListings(listings)))
);

export const fetchListing = listingId => dispatch => (
    APIListingUtil.fetchListing(listingId)
    .then( listing => dispatch(receiveListing(listing)))
);

export const createListing = listing => dispatch => (
    APIListingUtil.createListing(listing)
    .then( listing => dispatch(receiveListing(listing)))
);

export const updateListing = listing => dispatch => (
    APIListingUtil.updateListing(listing)
    .then( listing => dispatch(receiveListing(listing)))
);

export const deleteListing = listingId => dispatch => (
    APIListingUtil.deleteListing(listingId)
    .then( () => dispatch(removeListing(listingId)))
);