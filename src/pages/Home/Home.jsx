import React, { useContext } from "react";
import Header from "../../components/Header";
import { ThemeContext } from "../../context/Theme";
import HomeSections from "../../components/HomeSections";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Header />
      <HomeSections />
    </div>
  );
};

export default Home;
