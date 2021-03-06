import React from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {AiOutlineCloseCircle} from "react-icons/ai"

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.newReview;
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleClose(){
    this.setState({openReviewForm: false})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createReview(this.state)
      .then(
        setTimeout(() => this.props.fetchListing(this.props.match.params.listingId), 50 )
      ).then(this.props.clearReviewErrors)
  }

  renderErrors() {
    return this.props.errors.length ? (
      <div className="error-container">
        <ul className="form-errors">
          {this.props.errors.map((error, i) => (
            <div key={`error-${i}`}className="error-item">
              <BsFillExclamationCircleFill className="exclamation"/>
              <li>{error}</li>
            </div>
          ))}
        </ul>
      </div>
    ) : null;
  }

  componentDidUpdate(){
    if (this.state.author_id !== this.props.newReview.author_id) {
      this.setState({author_id: this.props.newReview.author_id})
    }
  }

  render() {
    return (
      <div className={`review-form-container ${this.props.openReviewForm ? "" : " hide"}` }>
        <AiOutlineCloseCircle className="close-review-form" onClick={()=>this.props.toggleReviewForm()}/>
        <div>
          <h4 id="your-stay">How was your stay?</h4>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <textarea onChange={this.update("body")} placeholder="It was the best of times..."/>
          <div className="empty-errors-cont">{this.renderErrors()}</div>
          <div className="btn-selector-errors-review">
            <select value={this.state.rating} onChange={this.update("rating")}>
              <option disabled value="">
                Choose a rating
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <button className="classy-btn">Submit review</button>
          </div>
        </form>
      </div>
    );
  }
}


export default CreateReviewForm;