import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function PrivacyPolicy() {
  return (
    <>
      <Meta title="Privacy Policy" />
      <BreadCrumb title="Privacy Policy" />
      <div class1="policy-wrapper py-5 home-wrapper-2">

          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
     
      </div>
    </>
  );
}

export default PrivacyPolicy;
