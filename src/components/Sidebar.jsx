import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";
import { categories } from "../components/pages/categoryData.js";

const Sidebar = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const isCategoryActive = (categoryId) => {
    return activeCategory === categoryId;
  };

  return (
    <div className="sidebar-dropdown-menu">
      <ul>
        {categories.map((category) => (
          <li key={category.cid}>
            <div
              className={`category ${isCategoryActive(category.cid) ? "active" : ""}`}
              onClick={() => handleCategoryClick(category.cid)}
            >
                <Link to={`/categorypage/${category.cid}`}>

              <button className="border border-2">
                  {category.dropname}
              </button>
              </Link>

            </div>
            {isCategoryActive(category.cid) && (
              <ul className="sub">
                {Object.keys(category).map((key) => {
                  if (key.startsWith("subcategory")) {
                    return (
                      <li key={key} >
                        {category[key].map((subcategory) => (
                          <Link
                            key={subcategory.subid}
                            to={`/categorypage/${subcategory.subid}`}
                          >
                            - {subcategory.title}
                          </Link>
                        ))}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default Sidebar;
