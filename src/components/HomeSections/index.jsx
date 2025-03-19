import React from "react";
import { Link } from "react-router-dom";
import "./HomeSections.css";
import PaintingCard from "../PaintingCard";
import DUMMY_PAINTINGS from "../../data";

const CATEGORIES = [
  "Abstract",
  "Portrait",
  "Landscape",
  "Modern Art",
  "Realism",
];

const HomeSections = () => {
  return (
    <div className="home-sections">
      {CATEGORIES.map((category, idx) => {
        return (
          <div className="section" key={idx}>
            <div className="section-header">
              <h1 className="sectionTitle">{category}</h1>
              <Link to={`/category/${category}`} className="viewMore">
                View More →
              </Link>
            </div>

            <div className="section-items">
              {DUMMY_PAINTINGS.slice(0, 5).map((painting) => (
                <PaintingCard painting={painting} key={painting.id} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeSections;
