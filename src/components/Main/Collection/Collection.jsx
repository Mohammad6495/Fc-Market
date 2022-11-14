import React from "react";

const Collection = () => {
  
  return (
    <div className="collection">
      <div className="container relative">
        <img src="./images/4.png" className="img-fluid" alt="" />
        <div className="collection-text">
          <div className="d-flex flex-column justify-content-center">
            <div className="winter-title">
              <h2>مدل های مردانه</h2>
            </div>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
            <div className="off-winter d-flex align-items-center justify-content-center">
              <h1 className="mb-0">%50 تخفیف</h1>
            </div>
            <a href="#" className="winter-link">
              خرید کنید
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
