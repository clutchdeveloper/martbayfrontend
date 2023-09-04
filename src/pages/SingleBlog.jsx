import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Container from "../components/Container";

function SingleBlog() {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />

      <Container class1="blog-wrapper home-wrapper-2 py-5">
      
          <div className="row">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <FaArrowLeft className="fs-5"/> Go Back to Blogs
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img src="images/blog-1.jpg" alt="blog" className="img-fluid w-100 my-4" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, exercitationem inventore ullam reprehenderit maxime perferendis deleniti ipsum accusamus unde excepturi officiis officia
                ducimus. Exercitationem vero provident impedit, dolorum accusamus modi?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt labore error est, sequi consequuntur
                reprehenderit incidunt cumque non architecto inventore, laborum officiis eos ratione, nihil sint! Iure, esse necessitatibus?
              </p>
            </div>
          </div>
        </Container>
      
    </>
  );
}

export default SingleBlog;
