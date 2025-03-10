import React, { useContext } from "react";
import Header from "../../components/Header";
import { ThemeContext } from "../../context/Theme";
import HomeSections from "../../components/HomeSections";
import "./Home.css";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Header />
      <div className="videoSection">
        <video src="BG_VIDEO.mp4" autoPlay muted loop />
      </div>
      <HomeSections />
    </div>
  );
};

export default Home;
