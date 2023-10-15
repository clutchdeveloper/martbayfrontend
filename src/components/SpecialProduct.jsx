import React, { useState } from "react";
import { Link } from "react-router-dom";


import watch from "../images/watch-4.jpg";

function SpecialProduct() {
    const [rating, setRating] = useState(0);

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate);

      // other logic
    };

    // Optinal callback functions
    const onPointerEnter = () => console.log("Enter");
    const onPointerLeave = () => console.log("Leave");
    const onPointerMove = (value, index) => console.log(value, index);
  return (
    <div className="mb-3">
      <div className=" flex justify-center">
        <div className="flex space-x-2">
          <div>
            <img src={watch} className=" h-40 w-40 shrink-0 object-cover" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Haweui</h5>
            <h6 className="title">Samsung Galaxy Note10+ Mobile Phone; Sim..</h6>
            {/* <Rating
              onClick={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove}
              size={14}
              initialValue={3}
              readonly={true}
              
            /> */}
            <p className="price">
              <span className="red-p">$100</span>&nbsp;<strike>$200</strike>
            </p>
            <div className="discount-till flex items-center gap-10">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="d-flex align-items-center gap-4">
                <span className="h-8 w-8 rounded-full text-white items-center flex justify-center bg-red-600">1</span>:
                <span className="h-8 w-8 rounded-full text-white items-center flex justify-center bg-red-600">1</span>:
                <span className="h-8 w-8 rounded-full text-white items-center flex justify-center bg-red-600">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: 5</p>
              <div className="progress">
                <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
