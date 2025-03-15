import React from "react";
import HomeSections from "@components/HomeSections";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={s.videoSection}>
        <video src="BG_VIDEO.mp4" autoPlay muted loop />
        <div className={s.quoteContainer}>
          <blockquote>
            “Painting is just another way of keeping a diary.”
            <span>— Pablo Picasso</span>
          </blockquote>
        </div>
      </div>

      <HomeSections />
    </div>
  );
};

export default Home;
