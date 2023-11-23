import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";

import logo from "../images/Logo.jpg";

import { Drawer, Box, ListItem, List } from "@mui/material";

import ProductList from "./ProductsList";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleProductsDropdown = (isOpen) => {
    setProductsDropdownOpen(isOpen);
  };

  const location = useLocation();

  const initialClickedLink =
    location.pathname === "/"
      ? 0
      : location.pathname === "/aboutpage"
      ? 1
      : location.pathname === "/productspage"
      ? 2
      : location.pathname === "/servicepage"
      ? 3
      : location.pathname === "/contactpage"
      ? 4
      : null;
  const [clickedLink, setClickedLink] = useState(initialClickedLink);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const home = () => {
    window.location.href = "/";
  };

  const handleLinkClick = (index) => {
    setClickedLink(index);
  };

  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingDown(prevScrollpos > currentScrollPos);
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  const navbarStyle = {
    position: isScrollingDown ? "fixed" : "absolute"
  };

  const list = () => (
    <Box style={{ width: "auto", height: 650 }}>
      <List>
        <ListItem className="list-items">
          <button className="close-button btn " onClick={handleClose}>
            <RxCross1 />
          </button>

          <div className="d-flex mt-5" href="/">
            <img
              src={logo}
              alt="logo-img"
              width={40}
              height={40}
              className=" me-2"
            />
            <h2>
              SMART LABORATORY <br />
              FURNITURE AND DECOR
            </h2>
          </div>

          <div>
            <div className="nav-links-drawer mt-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <hr />
              <li>
                <Link to="/aboutpage">Who we are</Link>
              </li>
              <hr />
              <li>
                <Link to="/projectpage" className="project-link">
                  Projects
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/servicepage">Products</Link>
              </li>
              <hr />
              <li>
                <Link to="/contactpage">Contact Us</Link>
              </li>

              <li className="d-flex justify-content-center align-items-center gap-3 mt-5">
              <div className="contact-no-drawer mt-3" >
                <a href="tel:+971(0)26395055"><p className="d-flex align-items-center"><FaPhone className="fs-4" />&nbsp; +971(0)26395055</p></a>
                <a href="mailto:info@smartlabuae.com"><p className="d-flex align-items-center"><IoMailOpenOutline className="fs-2" /> &nbsp;info@smartlabuae.com </p></a>
              </div>
              <div className='certified-nav-drawer' onClick={handleClose}>  
          <img src="https://www.arenasolutions.com/wp-content/uploads/what-is-iso-9001-compliance.png" className='iso me-3' data-bs-toggle="modal" data-bs-target="#imageExample1" alt="" />
          <img src="data:image/png;base64,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" className='icv' data-bs-toggle="modal" data-bs-target="#imageExample2"  alt="" />
              </div>
              </li>
            </div>
          </div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <nav style={navbarStyle}>
      <div className="nav-content d-flex">
        <div className="d-flex align-items-center" onClick={home}>
          <img
            src={logo}
            alt="logo-img"
            width={50}
            height={50}
            className=" me-2"
          />
          <h1 className="heading text-white">
            SMART LABORATORY <br />
            FURNITURE AND DECOR
          </h1>
        </div>


        <div className="contact-no" >
        <a className="d-flex" href="tel:+971(0)26395055"><p><FaPhone />+971(0)26395055</p></a>
        <a className="d-flex" href="mailto:info@smartlabuae.com"><p><IoMailOpenOutline /> info@smartlabuae.com </p></a>
        </div>

        <div className="nav-links">
          <Link
            to="/"
            className={clickedLink === 0 ? "clicked" : ""}
            onClick={() => handleLinkClick(0)}
          >
            <GoHome className="home-icon" />
          </Link>
          <Link
            to="/aboutpage"
            className={clickedLink === 1 ? "clicked" : ""}
            onClick={() => handleLinkClick(1)}
          >
            WHO WE ARE
          </Link>
          <Link
            to="/servicepage"
            className={clickedLink === 3 ? "clicked" : ""}
            onClick={() => handleLinkClick(3)}
            onMouseEnter={() => handleProductsDropdown(true)}
            onMouseLeave={() => handleProductsDropdown(false)}
          >
            <span>PRODUCTS</span>
          </Link>

          <Link
            to="/projectpage"
            className={clickedLink === 2 ? "clicked" : ""}
            onClick={() => handleLinkClick(2)}
          >
            PROJECTS
          </Link>
          <Link
            to="/contactpage"
            className={clickedLink === 4 ? "clicked" : ""}
            onClick={() => handleLinkClick(4)}
          >
            CONTACT US
          </Link>
        </div>

       
        


        <ProductList
          isProductsDropdownOpen={isProductsDropdownOpen}
          handleProductsDropdown={handleProductsDropdown}
        />

        <Drawer open={open} anchor="top" onClose={handleClose}>
          {list()}
        </Drawer>
        <button
          className="menu-button btn btn-outline-light fs-3"
          color="inherit"
          onClick={handleOpen}
        >
          <AiOutlineMenu />
        </button>
      </div>
      <div className='certified-nav'>
          <img src="https://www.arenasolutions.com/wp-content/uploads/what-is-iso-9001-compliance.png" className='iso me-3' data-bs-toggle="modal" data-bs-target="#imageExample1" alt="" />
          <img src="data:image/png;base64,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" className='icv' data-bs-toggle="modal" data-bs-target="#imageExample2"  alt="" />
        </div>


      <hr className="hr text-white position-absolute w-75" />
    </nav>
  );
};

export default Navbar;