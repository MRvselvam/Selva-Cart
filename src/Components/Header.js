import React from "react";
import "./Header.css";
import * as Images from "../Images/Image";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="nav-bar container-fluid bg-white d-flex justify-content-around align-items-center">
        <div className="logo-name-div position-abslute">
          <Link style={{ textDecoration: "none" }}>
            <img
              className="rounded-circle "
              src={Images.logo_img}
              alt="logo-img"
            />
            <p className="fs-4 fw-bold text-dark">Selva Cart</p>
          </Link>
        </div>
        <div className="search-input-div">
          <Link>
            <input
              className="search-input w-100 h-100 text-secondary  rounded border-0 ps-3 pe-5"
              placeholder="Search prouct and brands"
              id="searchInput"
            />
            <img
              className="mt-2"
              src={Images.search_icon}
              id="searchBtnLogo"
              alt="search-btn-logo"
            />
          </Link>
        </div>
        <div className="login-div mt-4">
          <Link style={{ textDecoration: "none" }}>
            <img
              src={Images.login_icon}
              className="d-inline-block h-50"
              alt="loginIcon"
            />
            <p className="d-inline-block text-dark fw-bold">Login</p>
          </Link>
        </div>
        <div className="cart-div h-50">
          <Link style={{ textDecoration: "none" }} className="">
            <img
              src={Images.cart_icon}
              alt="cart"
              className="h-75  d-inline-block "
            />
            <h3 className="d-inline-block text-danger fs-4 position-abslute me-2">
              0
            </h3>
            <p className="d-inline-block center text-dark fs-5 fw-bold position-absolute">
              Cart
            </p>
          </Link>
        </div>
        <div className="menu-div">
          <Link>
            <img src={Images.menu_icon} alt="menu" />
          </Link>
        </div>
      </div>

      <div className="container bg-info d-flex mt-3  align-items-center rounded">
        <Link to="Mobile" style={{ textDecoration: "none" }} className="">
          <img src={Images.mobile} className="w-50 rounded-circle" alt="" />
          <p className="text-secondary fw-bold ">Mobile</p>
        </Link>
        <Link style={{ textDecoration: "none" }} className="">
          <img
            src={Images.electronics}
            className="w-75  rounded-circle"
            alt=""
          />
          <p className="text-secondary fw-bold ">Electronics</p>
        </Link>
        <Link to="Laptop" style={{ textDecoration: "none" }} className="">
          <img src={Images.laptop} className="w-100 rounded-circle" alt="" />
          <p className="text-secondary fw-bold ">Laptop</p>
        </Link>
        <Link style={{ textDecoration: "none" }} className="">
          <img
            src={Images.furniture_appliences}
            className="w-50 rounded-circle"
            alt=""
          />
          <p className="text-secondary fw-bold ">Furniture </p>
        </Link>
        <Link style={{ textDecoration: "none" }} className="me-5">
          <img src={Images.clothes} className="w-75  rounded " alt="" />
          <p className="text-secondary fw-bold ">Clothes</p>
        </Link>
        <Link style={{ textDecoration: "none" }} className="">
          <img src={Images.jewels} className="w-100 rounded-circle" alt="" />
          <p className="text-secondary fw-bold ">Jewels</p>
        </Link>
        <Link style={{ textDecoration: "none" }} className="">
          <img src={Images.cosmetics} className="w-50  rounded-circle" alt="" />
          <p className="text-secondary fw-bold ">Cosmetics</p>
        </Link>
        <Link style={{ textDecoration: "none" }} className="">
          <img src={Images.toys} className="w-50 rounded-circle" alt="" />
          <p className="text-secondary fw-bold text-center ">Toys</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
