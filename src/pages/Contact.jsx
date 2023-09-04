import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BiSolidHome, BiSolidPhoneCall, BiSolidInfoCircle } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import Container from "../components/Container";

function Contact() {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127223.13155840062!2d6.922393176888786!3d4.817576558303641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea39f2c48e3%3A0x53562bdd7d8832db!2sPort%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1693116348566!5m2!1sen!2sng"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile Number" />
                    </div>
                    <div>
                      <textarea name="" className="w-100 form-control" id="" cols="30" rows="4" placeholder="Name" placeholder="Comments"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title      mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiSolidHome className="fs-5" />
                        <address className="mb-0">32 Chief Stanley, Iwofe Rumuolumeni, Port Harcourt</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiSolidPhoneCall className="fs-5" />
                        <a href="tel: +234 8036275526">+234 8036275526</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <HiMail className="fs-5" />
                        <a href="mailto:clutchdeveloper@gmail.com">clutchdeveloper@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiSolidInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 10AM - 8AM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      
    </>
  );
}

export default Contact;
