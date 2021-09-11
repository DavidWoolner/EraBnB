import React from "react";
import { Link } from 'react-router-dom';

export const Splash = () => (
  <>
    <Link to="/listings">
      <main
        id="splash1"
        style={{ backgroundImage: "url(" + modernSunsetPic + ")" }}
      >
        <div className="flexible-banner">
          <h2>Not sure where to go? Perfect.</h2>
          <span>
            <button className="flexible-btn">I'm flexible</button>
          </span>
        </div>
      </main>
    </Link>
    <div className="main-content">
      <h2>Explore nearby</h2>
      <div className="grid-container">
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
        <div className="grid-thumbs">
          <div></div>
          <span>
            <h3>New York</h3>
            <h4>2 hour drive</h4>
          </span>
        </div>
      </div>
      <h2>Live anywhere</h2>
      <div className="large-thumbs-container">
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(" + hugoSousaPic + ")" }}
          ></div>
          <h3>Unique stays</h3>
        </div>
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(" + homeInteriorPic + ")" }}
          ></div>
          <h3>Unique stays</h3>
        </div>
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(" + relaxBeachPlacePic + ")" }}
          ></div>
          <h3>Unique stays</h3>
        </div>
        <div>
          <div
            className="large-thumbs"
            style={{ backgroundImage: "url(" + orlovaMariaPic + ")" }}
          ></div>
          <h3>Unique stays</h3>
        </div>
      </div>
      <div
        className="lower-third"
        style={{ backgroundImage: "url(" + kitchenInteriorPic + ")" }}
      >
        <span>
          <h3>Try Hosting</h3>
        </span>
        <span>
          <p>
            Earn extra income and unlock new opportunities by sharing your
            space.
          </p>
        </span>
        <span>
          <button>Learn more</button>
        </span>
      </div>
    </div>
  </>
);

