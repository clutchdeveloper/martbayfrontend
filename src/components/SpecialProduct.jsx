import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

import watch from "../images/watch-4.jpg";

function SpecialProduct() {
    // const [rating, setRating] = useState(0);

    // // Catch Rating value
    // const handleRating = (rate: number) => {
    //   setRating(rate);

    //   // other logic
    // };

    // // Optinal callback functions
    // const onPointerEnter = () => console.log("Enter");
    // const onPointerLeave = () => console.log("Leave");
    // const onPointerMove = (value: number, index: number) => console.log(value, index);
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src={watch} className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Haweui</h5>
            <h6 className="title">Samsung Galaxy Note10+ Mobile Phone; Sim..</h6>
            <Rating
              // onClick={handleRating}
              // onPointerEnter={onPointerEnter}
              // onPointerLeave={onPointerLeave}
              // onPointerMove={onPointerMove}
              /* Available Props */
              size={24}
              initialValue={3}
              readonly={true}
            />
            <p className="price">
              <span className="red-p">$100</span>&nbsp;<strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="d-flex gap-10 align-items-center gap-10">
                <span className="badge rounded-circle p-3 bg-danger ">1</span>:<span className="badge rounded-circle p-3 bg-danger ">1</span>:
                <span className="badge rounded-circle p-3 bg-danger ">1</span>
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
