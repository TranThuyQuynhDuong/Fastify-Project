import apiDiscountedPro from "../../../api/apiDiscountedPro";
import { imageURL } from "../../../api/config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useAuth } from "../../../component/Provider/AuthProvider";
import Category from "../ProductAtHome/Category";
import Brand from "../ProductAtHome/Brand";

function Productsale() {
    const [data, setData] = useState([]);
    const { addItem } = useCart();
    const { token } = useAuth();
    const [quantity, setQuantity] = useState(1);
  
    const formatPrice = (price) => {
      const roundedPrice = Math.round(price);
      const formattedPrice = new Intl.NumberFormat("vi-VN").format(roundedPrice);
      return formattedPrice.replace(/,/g, ".") + ".000";
    };
    const addToCart = (item) => {
      if (item && typeof item === 'object' && item !== null) {
        if (item.name_pro && item.price_sale && item.image) {
          addItem({
            id: item.id, // Thay vì product.id, bạn có thể sử dụng item.id nếu cần
            name: item.name_pro,
            price: item.price_sale, // Sử dụng giá bán khuyến mãi thay vì giá gốc
            quantity: 1,
            image: item.image,
            user_id: token,
          });
          alert("Đã thêm vào giỏ hàng !");
        } else {
          console.error("Không thể thêm sản phẩm vào giỏ hàng, thiếu thông tin sản phẩm");
        }
      } else {
        console.error("Không thể thêm sản phẩm vào giỏ hàng, thiếu thông tin sản phẩm");
      }
    };
    
  
    useEffect(() => {
      apiDiscountedPro.getDiscountProWithLimit(100).then((res) => {
        try {
          const data = res.data.data;
  
          setData(data);
        } catch (e) {
          console.log(e);
        }
      });
    }, []);
  
    if (data.length > 0) {
  
  return (
    <>
      <section>
        <div class="container">
          <div class="row">
           <div class="col-sm-3"> 
              <div class="left-sidebar">
                <Category />

                <div class="brands_products">
                  <Brand />
                </div>

                <div class="price-range">
                  <h2>Price Range</h2>
                  <div class="well">
                    <input
                      type="text"
                      class="span2"
                      value=""
                      data-slider-min="0"
                      data-slider-max="600"
                      data-slider-step="5"
                      data-slider-value="[250,450]"
                      id="sl2"
                    />
                    <br />
                    <b>$ 0</b> <b class="pull-right">$ 600</b>
                  </div>
                </div>

                <div class="shipping text-center">
                  <img src="images/home/shipping.jpg" alt="" />
                </div>
              </div>
            </div>

            <div class="col-sm-9 padding-right">
              <div class="features_items">
                <h2 class="title text-center">Product Sale
                    
                </h2>
                {data.map((item, index) => (
  <div className="col-sm-4">
    <div className="product-image-wrapper">
      <div className="single-products">
        <div className="productinfo text-center">
      
                  <div
                    className="col-md col-6"
                    key={index}
                    style={{ display: "flex" }}
                  >
                    <figure
                      className="card-product-grid card-sm pt-3"
                      style={{ flexGrow: 1 }}
                    >
                      <Link
                        to={`/chi-tiet-san-pham/${item.slug}`}
                        className="img-wrap"
                      >
                        <img
                          src={imageURL + item.image}
                          style={{ maxHeight: "140px", width: "auto" }}
                        />
                      </Link>
                      <div className="text-wrap pb-3">
                        <Link
                        to={`/chi-tiet-san-pham/${item.slug}`}>
                        <p className="product-name" >{item.name_pro}</p>
                        </Link>
                        <span style={{ color: "red" }}>
                          {/* {formatPrice(item.price_sale)}
                          <sup>đ</sup>{" "} */}
                          <h2>
                            {formatPrice(item.price_sale)}
                            <sup>đ</sup>
                          </h2>
                          <span className="badge badge-danger">
                            {" "}
                            {item.percent_sale}{" "}
                          </span>
                        </span>
                        <br />
                        <span style={{ color: "gray" }}>
                          <del>
                            {formatPrice(item.price)}
                            <sup>đ</sup>
                          </del>
                        </span>
                        <br />
                      </div>
                    </figure>
                  </div>
              


                  <button
              type="button"
              className="btn btn-default add-to-cart"
              onClick={() => addToCart(item, quantity, token )}
            >
              <i className="fa fa-shopping-cart"></i>
              Add to cart
            </button>
         
        </div>
        
        
      </div>
      <div className="choose">
        <ul className="nav nav-pills nav-justified">
          
        </ul>
      </div>
    </div>
  </div>
))}

                
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
}
export default Productsale;
