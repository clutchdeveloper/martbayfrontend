import React from "react";
import { Link } from "react-router-dom";
import blog from "../images/catbanner-01.jpg";

function BlogCard() {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blog} alt="blog" className="img-fluid w-100" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde molestias optio ipsam!</p>
        <Link to="/blogs/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
