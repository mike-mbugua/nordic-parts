import "./home.css";
import React from "react";
import nordic from "./../../assets/icons/squircle.svg";

function Home() {
  return (
    <div className="home__container">
      <div className="context">
        <div className="left__context">
          <p>
            We take care of the car <br /> that takes care of you
          </p>
        </div>

        <div className="center__context">
          <div className="home__quote">
            As you get older, things conk out. It's a bit like a car. As long as
            it's something the mechanics can fix, you can chug on for a few more
            thousand miles.
          </div>
          <div className="home__deco">
            <img src={nordic} alt="" />
            <img src={nordic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
