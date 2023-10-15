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
        <div className="w-full max-w-7xl mx-auto flex">
          <div className="w-full flex flex-col md:flex-row items-center space-x-8 justify-between">
            <div className="w-full flex items-center space-x-2">
              <h5>
                <Link className="text-white" to="/">
                  Martbay
                </Link>
              </h5>

              <div className="flex flex-1">
                <input type="text" className="grow p-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <span className="rounded-none bg-slate-300 flex items-center px-2" id="basic-addon2">
                  <BiSearch className="fs-3" />
                </span>
              </div>
            </div>

            <div className="w-full flex items-center">
              <div className="flex pr-2 w-full items-center justify-between pt-4 md:pt-0">
                <div>
                  <Link to="/compare-product" className="flex items-center gap-1 text-white">
                    <MdOutlineCropRotate fontSize="xlarge" className="text-white fs-3" />
                    <p className="mb-0">Compare</p>
                  </Link>
                </div>
                <div>
                  <Link to="/wish-list" className="flex items-center gap-1 text-white">
                    <MdFavorite className="text-white fs-3" />
                    <p className="mb-0">Favourite</p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="flex items-center gap-1 text-white">
                    <FaUser fontSize="large" className="text-white fs-5" />
                    <p className="mb-0">Login</p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="flex items-center text-white relative">
                    <RiShoppingCart2Fill className="text-warning fs-3" />
                    <div className="d-flex flex-column gap-10">
                      <span className="-right-2 absolute -top-2 rounded-full text-slate-600 text-sm bg-white p-[.5px] px-1">0</span>
                      
                    </div>
                  </Link>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </header>
      <header className="w-full bg-[#232f3e] text-slate-200  py-3">
        <div className="">
          <div className="">
            <div className="">
              <div className="menu-bottom d-flex  gap-3">
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
                    <ul className="dropdown-menu text-black" aria-labelledby="dropdownMenuButton1">
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
                  <div className="flex items-center gap-5">
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
