import React from "react";
import "./HomeSections.css";
import PaintingCard from "../PaintingCard";
import { DUMMY_ART_SECTIONS } from "../../data";

const HomeSections = () => {
  return (
    <div>
      {DUMMY_ART_SECTIONS.map((section) => (
        <div className="section">
          <h1 className="sectionTitle">{section.title}</h1>
          <div className="section-items">
            {section.items.map((painting) => (
              <PaintingCard painting={painting} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSections;
