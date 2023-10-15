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
  //{`col-3 ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
  return (
    <>
      <div className="flex">
        <Link to={`${location.pathname !== "/:id" ? "/product/:id" : location.pathname == "/product/:id" ? "/product/:id" : ":id"}`} className="relative">
          <div className="absolute top-0 right-7">
            <button className="border-0 bg-transparent">
              <AiOutlineHeart className="icon" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="w-full" alt="product image" />
            <img src={tv} className="w-full" alt="product image" />
          </div>
          <div className="">
            <h6 className="">Haweui</h6>
            <h5 className="">Kids headphones bulk 10 pack multi colored for students</h5>
            <div className="flex ">
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                /* Available Props */
                size={15}
                initialValue={3}
                readonly={true}
              />
            </div>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel eius modi culpa placeat harum repudiandae eligendi possimus voluptatibus. Incidunt.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="absolute top-0">
            <div className="flex flex-col">
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
