import React, { useState } from "react";
import HomeSections from "@components/HomeSections";
import s from "./Home.module.scss";

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <React.Fragment>
      <div className={s.home}>
        {/* Background Video Section */}
        <div className={s.videoContainer}>
          <video
            src="https://njjspvufrktahgpkmukd.supabase.co/storage/v1/object/sign/videos/BG_VIDEO.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWRlb3MvQkdfVklERU8ubXA0IiwiaWF0IjoxNzQyMTA2NDkwLCJleHAiOjQ4OTU3MDY0OTB9.V6HGhXQY5DLFPikGCIAp3Nl8PWTmPkbJ8ugkpSrofCc"
            autoPlay
            muted
            loop
            className={`${s.video} ${isVideoLoaded ? s.showVideo : ""}`}
            onLoadedData={() => setIsVideoLoaded(true)}
          />

          {/* Dark Gradient Overlay for better text contrast */}
          <div className={s.overlay}></div>

          {/* Quote Section */}
          <div
            className={`${s.quoteContainer} ${isVideoLoaded ? s.fadeIn : ""}`}
          >
            <blockquote>
              “Painting is just another way of keeping a diary.”
              <span>— Pablo Picasso</span>
            </blockquote>
          </div>

          {/* Loader Animation */}
          {!isVideoLoaded && <div className={s.videoLoader}></div>}
        </div>

        {/* Other Sections */}
      </div>
      <HomeSections />
    </React.Fragment>
  );
};

export default Home;
