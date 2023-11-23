import React from "react";
import "../styles/productlist.css";
import {categories} from "../components/pages/categoryData.js"
import { Link } from "react-router-dom";

const ProductList = ({
  isProductsDropdownOpen,
  handleProductsDropdown
}) => {
  return (
    <div
      className={`products-dropdown-menu ${
        isProductsDropdownOpen ? "visible" : ""
      }`}
      onMouseEnter={() => handleProductsDropdown(true)}
      onMouseLeave={() => handleProductsDropdown(false)}
    >
      <ul>
        {categories.map(category => (
          <li key={category.cid}>
            <Link to={`/categorypage/${category.cid}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;