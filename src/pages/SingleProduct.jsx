import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import ProductCard from "../components/ProductCard";
import { Rating } from "react-simple-star-rating";
import ReactImageZoom from "react-image-zoom";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";


function SingleProduct() {
  const props = { width: 400, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" };
  const [orderedProduct, setOrderedProduct] = useState(true);

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



const copyToClipboard = (text) => {
  console.log("text", text);
  var textField = document.createElement("textarea");
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
};


  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>

                <div>
                  <div className="other-product-images d-flex flex-wrap gap-15">
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"  alt="watch" />
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="watch" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      onPointerMove={onPointerMove}
                      /* Available Props */
                      size={20}
                      initialValue={4}
                      readonly={true}
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Havelts</p>
                  </div>
                  <div
                    className="d-flex g
                  <h3>ABC:</h3><p>cdf</p>ap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data"> Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border-1 bg-white border text-dark border-secondary">S</span>
                      <span className="badge border-1 bg-white border text-dark border-secondary">M</span>
                      <span className="badge border-1 bg-white border text-dark border-secondary">XL</span>
                      <span className="badge border-1 bg-white border text-dark border-secondary">XXL</span>
                    </div>
                  </div>

                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>

                  <div className="d-flex gap-15 align-items-center flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input type="number" min={1} max={10} name="" className="form-control" style={{ width: "70px" }} id="" />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Add to Cart
                      </button>
                      <button className="button signup" to="/signup">
                        Buy It Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <BiGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>

                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping & Returns:</h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br /> We ship all US domestic orders within <b>5 - 10 business days!</b>
                    </p>
                  </div>

                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link:</h3>
                    <a
                      href="javascript:void(0)"
                      onClick={() => copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")}
                      className="product-data">
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur molestiae omnis perspiciatis ducimus.</p>
              </div>
            </div>
          </div>
       
      </div>
      <div id="review" className="reviews-wrapper  home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10                   align-items-center">
                      <Rating
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                        /* Available Props */
                        size={20}
                        initialValue={4}
                        readonly={true}
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a className="text-dark text-decoration-underline" href="">
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>

                <div className="review-form py-4">
                  <h4 className="mb-2">write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <Rating
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                        /* Available Props */
                        size={20}
                        initialValue={4}
                        readonly={false}
                      />
                    </div>

                    <div>
                      <textarea name="" className="w-100 form-control" id="" cols="30" rows="4" placeholder="Name" placeholder="Comments"></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>

                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Henry Charles</h6>
                      <Rating
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                        /* Available Props */
                        size={20}
                        initialValue={4}
                        readonly={true}
                      />
                    </div>

                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur doloremque odit cupiditate doloribus esse? Modi beatae repellendus optio illum vel asperiores
                      blanditiis alias, unde magni tenetur libero quidem. Nobis?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      <div className="popular-wrapper py-5 home-wrapper-2">
        
          <div className="row d-flex  justify-content-center">
            <h3 className="section-heading ">Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard />
          </div>
      
      </div>
    </>
  );
}

export default SingleProduct;
