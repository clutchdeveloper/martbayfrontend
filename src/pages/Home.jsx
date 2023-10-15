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

function Home() {
  return (
    <>
      <div className="w-full flex items-center ">
        <div className="w-full max-w-7xl gap-2  mx-auto grid grid-cols-1 md:grid-cols-2 p-2">
          <div className="relative">
            <img src={banner1} className="" alt="main banner" />
            <div className="absolute top-0 z-10">
              <h4 className="text-white">SUPERCHARGED FOR PROS.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $999.00 or $41.02/mo.</p>
              <Link className="p-3 ">BUY NOW</Link>
            </div>
          </div>

          <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
            <div className="relative">
              <img src={banner2} className="w-full" alt="main banner" />
              <div className="absolute top-0 z-10">
                <h4>Best Sale</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.02/mo.</p>
              </div>
            </div>
            <div className="relative">
              <img src={banner3} className="w-full" alt="main banner" />
              <div className="absolute top-0 z-10">
                <h4>NEW ARRIVAL.</h4>
                <h5>Buy iPad here</h5>
                <p>From $999.00 or $41.02/mo.</p>
              </div>
            </div>{" "}
            <div className="relative">
              <img src={banner4} className="w-full" alt="main banner" />
              <div className="absolute top-0 z-10">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.02/mo.</p>
              </div>
            </div>
            <div className="relative">
              <img src={banner5} className="w-full" alt="main banner" />
              <div className="absolute top-0 z-10">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.02/mo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full mx-auto flex py-5 px-2 max-w-7xl">
          <div className="w-full flex justify-between ">
            {services?.map((i, j) => {
              return (
                <div className="flex space-x-2 items-center" key={j}>
                  <img src={i.image} className="" alt="offer" />
                  <div className="text-sm md:text-[16px]">
                    <h6>{i.title}</h6>
                    <p>{i.tagline}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div class1="w-full py-5">
        <div className="w-full mx-auto flex py-5 px-2 max-w-7xl">
          <div className="">
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
      </div>

      <div className="w-full py-5 ">
        <div className="w-full mx-auto max-w-7xl flex flex-col items-center">
          <div className="col-12">
            <h3 className="section-heading ">Featured Collection</h3>
          </div>
          <div className="w-full  grid center grid-cols-1 md:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>

      <div class1="w-full py-5">
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="">
            <div className="relative">
              <img src={famous1} className="w-full h-[400px]" alt="famous" />
              <div className="absolute top-0">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch Series ?</h6>
                <p className="text-dark">From $399 or $10.02/mo.for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="famous-card position-relative">
              <img src={famous2} className="w-full h-[400px]" alt="famous" />
              <div className="top-0 absolute">
                <h5>Studio Display</h5>
                <h6>600 hits of brightness.</h6>
                <p>27-inch5K Retina display</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="famous-card position-relative">
              <img src={famous3} className="w-full h-[400px]" alt="famous" />
              <div className="top-0 absolute">
                <h5>Smartphones</h5>
                <h6>Smartphone 13 Pro.</h6>
                <p>New in Green. From $999.00 or $41.60/mo. for 24 mo. Footnotes*</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="relative">
              <img src={famous4} className="w-full h-[400px]" alt="famous" />
              <div className="top-0 absolute">
                <h5>Home speakers</h5>
                <h6>Room-filling sound</h6>
                <p>From $600 or $76.56/mo. for 12 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class1="w-full py-5 ">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading ">Special Products</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </div>

      <div class1="w-full py-5 ">
        <div className="row d-flex  justify-content-center">
          <h3 className="section-heading ">Our Popular Products</h3>
        </div>
        <div className="w-full  grid center grid-cols-1 md:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="w-full py-5">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="flex">
                <div className="mx-4 w-[300px]">
                  <img src={brand1} alt="brand" />
                </div>
                <div className="mx-4 w-[300px]">
                  <img src={brand2} alt="brand" />
                </div>
                <div className="mx-4 w-[300px]">
                  <img src={brand3} alt="brand" />
                </div>
                <div className="mx-4 w-[300px]">
                  <img src={brand4} alt="brand" />
                </div>
                <div className="mx-4 ww-[300px]">
                  <img src={brand5} alt="brand" />
                </div>
                <div className="mx-4 w-[300px]">
                  <img src={brand6} alt="brand" />
                </div>
                <div className="mx-4 w-[300px]">
                  <img src={brand7} alt="brand" />
                </div>
                <div className="mx-4 w-[300px]">
                  <img src={brand8} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-5 ">
        <div className="">
          <h3 className="section-heading">Our Latest Blogs</h3>
        </div>
        <div className="grid gap-2 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="">
            <BlogCard />
          </div>
          <div className="">
            <BlogCard />
          </div>
          <div className="">
            <BlogCard />
          </div>
          <div className="">
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
