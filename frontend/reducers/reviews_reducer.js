import {
  RECEIVE_ALL_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
} from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return { ...action.review}
    case REMOVE_REVIEW:
      let newState = { ...state };
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
