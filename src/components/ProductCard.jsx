import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { FaCartPlus } from "react-icons/fa";

import watch from "../images/acc.jpg";
import tv from "../images/tv.jpg";

function ProductCard(props) {
  const { grid } = props;
  let location = useLocation();

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };

  //Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);
  return (
    <>
      <div className={`col-3 ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname !== "/:id" ? "/product/:id" : location.pathname == "/product/:id" ? "/product/:id" : ":id"}`} className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <AiOutlineHeart className="icon" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={tv} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Haweui</h6>
            <h5 className="product-title">Kids headphones bulk 10 pack multi colored for students</h5>
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
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel eius modi culpa placeat harum repudiandae eligendi possimus voluptatibus. Incidunt.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className="border-0 my-1 bg-transparent">
                <FaRegEye className="icon" />
              </button>
              <button className="border-0 my-1 bg-transparent">
                <PiArrowsCounterClockwiseBold className="icon" />
              </button>
              <button className="border-0 my-1 bg-transparent">
                <FaCartPlus className="icon" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
