import React from "react";
import { Link } from "react-router-dom";
import { services } from "../utils/Data";

import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

import banner1 from "../images/main-banner-1.jpg";
import banner2 from "../images/catbanner-01.jpg";
import banner3 from "../images/catbanner-02.jpg";
import banner4 from "../images/catbanner-03.jpg";
import banner5 from "../images/catbanner-04.jpg";

import camera from "../images/camera.jpg";
import tv from "../images/tv.jpg";
import headphone from "../images/headphone.jpg";
import watch from "../images/watch-4.jpg";
import famous1 from "../images/famouse-1.webp";
import famous2 from "../images/famouse-2.webp";
import famous3 from "../images/famous-3.webp";
import famous4 from "../images/famouse-4.jpeg";
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import Container from "../components/Container";

function Home() {
  return (
    <>
      <Container class1="home-warapper-1 py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="main-banner position-relative">
              <img src={banner1} className="img-fluid rounded-3" alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.02/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-4">
            <div className="d-flex flex-wrap  gap-10 ">
              <div className="small-banner position-relative">
                <img src={banner2} className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.02/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={banner3} className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>Buy iPad here</h5>
                  <p>From $999.00 or $41.02/mo.</p>
                </div>
              </div>{" "}
              <div className="small-banner position-relative">
                <img src={banner4} className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.02/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src={banner5} className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.02/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-warapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} className="img-fluid" alt="offer" />
                    <div>
                      <h6>{i.title}</h6>
                      <p>{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex d-xs-column justify-content-between align-items-center flex-wrap">
              <div className="col-3 d-flex  align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="cameras" className="img-fluid" />
              </div>
              <div className="col-3 d-flex  align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="smartscreen" className="img-fluid" />
              </div>
              <div className="col-3 d-flex  align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="headphone" className="img-fluid" />
              </div>
              <div className="col-3 d-flex  align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={watch} className="img-fluid" alt="watch" />
              </div>
              <div className="col-3 d-flex  align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="cameras" className="img-fluid" />
              </div>
              <div className="col-3 d-flex  align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="smartscreen" className="img-fluid" />
              </div>
              <div className="col-3 d-flex  align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="headphone" className="img-fluid" />
              </div>
              <div className="col-3 d-flex  align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={watch} className="img-fluid" alt="watch" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading ">Featured Collection</h3>
          </div>

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous1} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch Series ?</h6>
                <p className="text-dark">From $399 or $10.02/mo.for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous2} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Studio Display</h5>
                <h6>600 hits of brightness.</h6>
                <p>27-inch5K Retina display</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous3} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Smartphones</h5>
                <h6>Smartphone 13 Pro.</h6>
                <p>New in Green. From $999.00 or $41.60/mo. for 24 mo. Footnotes*</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous4} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Home speakers</h5>
                <h6>Room-filling sound</h6>
                <p>From $600 or $76.56/mo. for 12 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading ">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
  
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
       
          <div className="row d-flex  justify-content-center">
            <h3 className="section-heading ">Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
       
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
       
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand1} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand2} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand3} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand7} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand8} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
     
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
     
      </Container>
    </>
  );
}

export default Home;
