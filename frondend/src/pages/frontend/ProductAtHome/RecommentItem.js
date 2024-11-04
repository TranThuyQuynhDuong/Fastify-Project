import React, { useState, useEffect } from "react";
import { imageURL } from "../../../api/config";
import apiProduct from "../../../api/apiProduct";

function RecommentItem() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    apiProduct
      .getDetailAndProductOther("iphone-13")
      .then((res) => {
        const productOther = res.data.productOther;
        setProducts(productOther.slice(0, 7));
      })
      .catch((error) => {
        console.error("Error fetching productOther:", error);
      });
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    if (currentIndex < products.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="recommended_items">
      <h2 className="title text-center">Recommended Items</h2>

      <div
        id="recommended-item-carousel"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {products
            .slice(currentIndex, currentIndex + 3)
            .map((product, index) => (
              <div key={index} className={`item active`}>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src={`${imageURL}/${product.image}`} alt="" />
                        <h2>{product.price}</h2>
                        {/* <p>{product.name}</p> */}
                        <p className="product-name">{product.name}</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart"></i>Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <a
          className="left recommended-item-control"
          href="#recommended-item-carousel"
          data-slide="prev"
          onClick={handlePrev}
        >
          <i className="fa fa-angle-left"></i>
        </a>
        <a
          className="right recommended-item-control"
          href="#recommended-item-carousel"
          data-slide="next"
          onClick={handleNext}
        >
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
}

export default RecommentItem;
