import React from "react";
import HomeSections from "@components/HomeSections";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={s.videoSection}>
        <video
          src="https://njjspvufrktahgpkmukd.supabase.co/storage/v1/object/sign/videos/BG_VIDEO.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWRlb3MvQkdfVklERU8ubXA0IiwiaWF0IjoxNzQyMTA2NDkwLCJleHAiOjQ4OTU3MDY0OTB9.V6HGhXQY5DLFPikGCIAp3Nl8PWTmPkbJ8ugkpSrofCc"
          autoPlay
          muted
          loop
        />
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
