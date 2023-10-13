import React from "react";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function WishList() {
  return (
    <>
      <Meta title="Wish List" />
      <BreadCrumb title="Wish List" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
       
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" className="cross position-absolute img-fluid" alt="cross" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch with Wi-Fi+3G Tablet</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" className="cross position-absolute img-fluid" alt="cross" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch with Wi-Fi+3G Tablet</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" className="cross position-absolute img-fluid" alt="cross" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch with Wi-Fi+3G Tablet</h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
}

export default WishList;
