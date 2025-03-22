import React from "react";
import { Link } from "react-router-dom";
import s from "./HomeSections.module.scss";
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
    <div className={s.homeSections}>
      {CATEGORIES.map((category, idx) => {
        return (
          <div className={s.section} key={idx}>
            <div className={s.sectionHeader}>
              <h1 className={s.sectionTitle}>{category}</h1>
              <Link to={`/category/${category}`} className={s.viewMore}>
                View More →
              </Link>
            </div>

            <div className={s.sectionItems}>
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
