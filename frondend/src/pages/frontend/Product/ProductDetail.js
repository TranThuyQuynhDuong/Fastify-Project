import React, { useEffect, useState } from "react";
import apiProduct from "../../../api/apiProduct";
import { imageURL } from "../../../api/config";
import { Link, useParams } from "react-router-dom";
import Category from "../ProductAtHome/Category";
import Brand from "../ProductAtHome/Brand";
import { useAuth } from "../../../component/Provider/AuthProvider";
import { useCart } from "react-use-cart";

function DetailProduct() {
  const [productDetail, setProductDetail] = useState(null);
  const [productOthers, setProductOthers] = useState([]);
  const [imageRelated, setImageRelated] = useState([]);
  const { slug } = useParams(); // Lấy slug từ params của React Router
  const [currentIndex, setCurrentIndex] = useState(0);
  const { token } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await apiProduct.getDetailAndProductOther(slug); // Sử dụng slug lấy từ params
        setProductDetail(response.data.data);
        setProductOthers(response.data.productOther);
        setImageRelated(response.data.image_related); // Lấy danh sách ảnh mô tả
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };
    fetchProductDetail();
  }, [slug]); // Thêm slug vào dependency array để useEffect được gọi lại khi slug thay đổi

  const handleNext = (e) => {
    e.preventDefault();
    if (productOthers && currentIndex < productOthers.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  
  const handlePrev = (e) => {
    e.preventDefault();
    if (productOthers && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  const formatPrice = (price) => {
    const roundedPrice = Math.round(price);
    const formattedPrice = new Intl.NumberFormat("vi-VN").format(roundedPrice);
    return formattedPrice.replace(/,/g, ".") + ".000";
  };

  const handleImageClick = (img) => {
    setProductDetail((prevDetail) => ({
      ...prevDetail,
      image: img.image,
    }));
  };

  const addToCart = (user_id, productDetail, quantity) => {
    if (user_id !== null) {
      productDetail.user_id = user_id;
      addItem(productDetail, quantity);
      alert("Đã thêm vào giỏ hàng !");
    } else {
      alert("Hãy đăng nhập để mua hàng !");
    }
  };
  return (
    <>
      {productDetail && (
        <section>
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <div class="left-sidebar">
                  <Category />

                  <div class="brands_products">
                    <Brand />
                  </div>
                </div>
              </div>

              <div class="col-sm-9 padding-right">
                <div class="product-details">
                <div className="col-sm-5">
                    <div className="view-product">
                      <div className="product-image-wrapper">
                        <img
                          src={`${imageURL}${productDetail.image}`}
                          alt=""
                          style={{
                            maxWidth: "300px",
                            maxHeight: "450px",
                            width: "100%",
                            height: "auto",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>
                    </div>
                    <div
              id="similar-product"
              className="carousel slide"
              data-ride="carousel"
              style={{ maxWidth: "300px" }} // Thiết lập maxWidth cho carousel
            >
              {/* <div className="carousel-inner" style={{ display: "flex", overflow: "hidden" }}>
                <div className="item active" style={{ display: "flex", flexWrap: "nowrap" }}>
                  {imageRelated
                    .slice(currentIndex, currentIndex + 3)
                    .map((img, index) => (
                      <a
                        key={index}
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          handleImageClick(img);
                        }}
                        style={{ flex: "0 0 auto", width: "33.33%", padding: "0 5px" }} // Chia đều 3 hình ảnh trong một hàng
                      >
                        <img
                          src={`${imageURL}${img.image}`}
                          alt=""
                          style={{
                            width: "100%", // Kích thước hình ảnh là 100% của phần tử chứa nó
                            height: "auto", // Đảm bảo tỷ lệ khung hình được giữ nguyên
                            margin: "0", // Loại bỏ margin
                            display: "block", // Hiển thị hình ảnh như một khối để giữ cho các hình ảnh cân đối
                          }}
                        />
                      </a>
                    ))}
                    
                </div>
                
              </div> */}
              {/* <a
                        className="left item-control"
                        href="#similar-product"
                        data-slide="prev"
                        onClick={handlePrev}
                      >
                        <i className="fa fa-angle-left"></i>
                      </a>
                      <a
                        className="right item-control"
                        href="#similar-product"
                        data-slide="next"
                        onClick={handleNext}
                      >
                        <i className="fa fa-angle-right"></i>
                      </a> */}

                      
                    </div>
                  </div>

                  <div class="col-sm-7">
                    <div class="product-information">
                      <img
                        src="images/product-details/new.jpg"
                        class="newarrival"
                        alt=""
                      />
                      <h2>
                        <p className="product-name">{productDetail.name}</p>
                      </h2>
                      <img src="images/product-details/rating.png" alt="" />
                      <span>
                        <span>{formatPrice(productDetail.price)}</span>
                      </span>
                      <p>
                        <b>Availability:</b> In Stock
                      </p>
                      <p>
                        <b>Condition:</b> New
                      </p>
                      <p>
                        <b>Brand:</b>
                        {productDetail.nameBrand}
                      </p>
                      <label>Quantity:</label>
                      <input
                        type="number"
                        value={quantity} // Sử dụng giá trị của state quantity làm giá trị của input
                        min={1}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                      />
                      <button
                        type="button"
                        className="btn btn-fefault cart"
                        onClick={() =>
                          addToCart(token, productDetail, quantity)
                        }
                      >
                        <i className="fa fa-shopping-cart"></i>
                        Add to cart
                      </button>
                      <a href="">
                        <img
                          src="images/product-details/share.png"
                          class="share img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="category-tab shop-details-tab">
                  <div class="col-sm-12">
                    <ul class="nav nav-tabs">
                      <li>
                        <a href="#details" data-toggle="tab">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade active in" id="details">
                      {productDetail.chip && (
                        <div className="col-12">
                          <hr />
                          <img
                            src={`${imageURL}${productDetail.image_detail}`}
                            alt=""
                            style={{
                              display: "block",
                              margin: "0 auto 20px",
                              maxWidth: "500px",
                              width: "100%",
                              height: "auto",
                              transition: "transform 0.3s ease",
                            }}
                          />
                          <h6>Cấu hình {productDetail.name}</h6>
                          <table
                            className="table table-striped"
                            style={{ fontSize: "13px" }}
                          >
                            <tbody>
                              <tr>
                                <td style={{ width: "150px" }}>Màn hình:</td>
                                <td>{productDetail.screen}</td>
                              </tr>
                              <tr>
                                <td>Hệ điều hành:</td>
                                <td>{productDetail.operating_system}</td>
                              </tr>
                              <tr>
                                <td>Camera sau:</td>
                                <td>{productDetail.rear_camera}</td>
                              </tr>
                              <tr>
                                <td>Camera trước:</td>
                                <td>{productDetail.front_camera}</td>
                              </tr>
                              <tr>
                                <td>Chip:</td>
                                <td>{productDetail.chip}</td>
                              </tr>
                              <tr>
                                <td>Ram:</td>
                                <td>{productDetail.ram}</td>
                              </tr>
                              <tr>
                                <td>Dung lượng lưu trữ:</td>
                                <td>{productDetail.rom}</td>
                              </tr>
                              <tr>
                                <td>Kết nối:</td>
                                <td>{productDetail.connect}</td>
                              </tr>
                              <tr>
                                <td>Pin, Sạc:</td>
                                <td>{productDetail.pin}</td>
                              </tr>
                              <tr>
                                <td>Kích thước:</td>
                                <td>{productDetail.size}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default DetailProduct;
