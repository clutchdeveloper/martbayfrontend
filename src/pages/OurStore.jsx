import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Rating } from "react-simple-star-rating";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import filter1 from "../images/gr.svg";
import filter2 from "../images/gr3.svg";
import filter3 from "../images/gr2.svg";
import filter4 from "../images/gr.svg";
import watch from "../images/watch-4.jpg";
import Container from "../components/Container";

function OurStore() {
  const [grid, setGrid] = useState(4);
  

  const [rating, setRating] = useState(0);

  //Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };

  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);
  return (
    <>
      <Meta title="Store" />
      <BreadCrumb title="Store" />
      <Container class1="store-wrapper py-5 home-wrapper-2">

          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      Out Of Stock (0)
                    </label>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating ">
                      <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating ">
                      <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-1" />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-2" />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img src={watch} alt="watch" className="img-fluid" />
                    </div>
                    <div className="w-50 d-flex flex-column">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <Rating
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                        /* Available Props */
                        size={24}
                        initialValue={3}
                        readonly={true}
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img src={watch} alt="watch" className="img-fluid" />
                    </div>
                    <div className="w-50 d-flex flex-column">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <Rating
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                        /* Available Props */
                        size={24}
                        initialValue={3}
                        readonly={true}
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100%" }}>
                      Sort By
                    </p>
                  <select name="" defaultValue={"DEFAULT"} className="form-control form-select py-1 sort" id="">

                      <option value={"manual"}>Featured</option>
                      <option>Alphabetically, A-Z</option>
                      <option>Alphabetically, Z-A</option>
                      <option>Best Selling</option>
                      <option>Price, low to high</option>
                      <option>Price, high to low </option>
                      <option>Date, new to old</option>
                      <option>Date, old to new</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        className="d-block img-fluid"
                        src={filter1}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        className="d-block img-fluid"
                        src={filter2}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        className="d-block img-fluid"
                        src={filter3}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        className="d-block img-fluid"
                        src={filter4}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </Container>
     
    </>
  );
}

export default OurStore;
