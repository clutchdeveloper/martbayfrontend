import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineCropRotate } from "react-icons/md";
import {BiSearch} from "react-icons/bi"
import { MdFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline :{" "}
                <a className="text-white" href="tel:+234 8036275526">
                  +234 8036275526
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-xs-12 col-md-7">
              <div className="d-flex gap-10 align-items-center">
                <h5>
                  <Link className="text-white" to="/">
                    Martbay
                  </Link>
                </h5>

                <div className="input-group">
                  <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                  <span className="input-group-text" id="basic-addon2">
                    <BiSearch className="fs-3" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                    <MdOutlineCropRotate fontSize="xlarge" className="text-white fs-3" />
                    <p className="mb-0">Compare</p>
                  </Link>
                </div>
                <div>
                  <Link to="/wish-list" className="d-flex align-items-center gap-10 text-white">
                    <MdFavorite className="text-white fs-3" />
                    <p className="mb-0">Favourite</p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <FaUser fontSize="large" className="text-white fs-5" />
                    <p className="mb-0">Login</p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white position-relative">
                    <RiShoppingCart2Fill className="text-warning fs-3" />
                    <div className="d-flex flex-column gap-10">
                      <span className="number text-light position-absolute">0</span>
                      {/* <p className="mb-0">$ 500</p> */}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {/* <WidgetsOutlinedIcon /> <span className="me-5 d-inline-block"> Show Categories</span> */}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="">Home</NavLink>
                    <NavLink to="/store">store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
