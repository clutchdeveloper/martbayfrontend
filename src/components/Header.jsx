import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineCropRotate } from "react-icons/md";
import {BiSearch} from "react-icons/bi"
import { MdFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";

function Header() {
  return (
    <div className="w-screen">
      <header className="w-full p-3 justify-center bg-[#131921] border-b border-slate-500">
        <div className="w-full max-w-7xl mx-auto flex justify-between text-sm">
          <div className="">
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
      </header>
      <header className="w-full p-3 justify-center bg-[#131921] border-b border-slate-500">
        <div className="w-full max-w-7xl mx-auto flex justify-between">
              <div className="flex items-center space-x-2">
                <h5>
                  <Link className="text-white" to="/">
                    Martbay
                  </Link>
                </h5>

                <div className="flex w-full">
                  <input type="text" className="grow p-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                  <span className="rounded-none bg-slate-300 flex items-center px-2" id="basic-addon2">
                    <BiSearch className="fs-3" />
                  </span>
                </div>
              </div>
            
            <div className="w-full flex">
              <div className="flex items-center space-x-2">
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
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white relative">
                    <RiShoppingCart2Fill className="text-warning fs-3" />
                    <div className="d-flex flex-column gap-10">
                      <span className="number text-light absolute">0</span>
                      {/* <p className="mb-0">$ 500</p> */}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
         </div>
      </header>
      <header className="w-full bg-[#232f3e] text-slate-200 py-3">
        <div className="">
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
    </div>
  );
}

export default Header;
