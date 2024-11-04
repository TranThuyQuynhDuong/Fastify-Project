import React, { useEffect, useState } from "react";
import apiProduct from "../../../api/apiProduct";
import { imageURL } from "../../../api/config";
import { Link, useParams } from "react-router-dom";
import Category from "../ProductAtHome/Category";
import Brand from "../ProductAtHome/Brand";
import { useCart } from "react-use-cart";
import { useAuth } from "../../../component/Provider/AuthProvider";

function ProductBrand() {
  const [products, setProducts] = useState([]);
  const { slug } = useParams(); // Lấy slug từ URL
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();
  const { token } = useAuth();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductsByBrand = async () => {
      try {
        const response = await apiProduct.getProductByBrandSlug(
          slug,
          1, // Trang đầu tiên
          9 // Số lượng sản phẩm trên mỗi trang
        );
        if (Array.isArray(response.data.data)) {
          // Kiểm tra response.data.data có phải là một mảng
          setProducts(response.data.data); // Gán danh sách sản phẩm
        } else {
          console.error("Response data is not an array:", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Kết thúc quá trình tải dữ liệu
      }
    };

    fetchProductsByBrand();
  }, [slug]); // Slug thay đổi thì gọi API lại

  if (loading) {
    return <div>Loading...</div>; // Hiển thị thông báo khi đang tải dữ liệu
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products found.</div>; // Xử lý trường hợp không có sản phẩm
  }
  const formatPrice = (price) => {
    const roundedPrice = Math.round(price);
    const formattedPrice = new Intl.NumberFormat("vi-VN").format(roundedPrice);
    return formattedPrice.replace(/,/g, ".") + ".000";
  };
  const addToCart = (product, quantity) => {
    if (
      product &&
      product.hasOwnProperty("attributes") &&
      typeof product.attributes === "object" &&
      product.attributes !== null
    ) {
      if (
        product.attributes.name &&
        product.attributes.price &&
        product.attributes.image
      ) {
        addItem({
          id: product.id,
          name: product.attributes.name,
          price: product.attributes.price,
          quantity: 1,
          image: product.attributes.image,
          user_id: token,
        });
        alert("Đã thêm vào giỏ hàng !");
      } else {
        console.error(
          "Không thể thêm sản phẩm vào giỏ hàng, thiếu thông tin sản phẩm"
        );
      }
    } else {
      console.error(
        "Không thể thêm sản phẩm vào giỏ hàng, thiếu thông tin sản phẩm"
      );
    }
  };

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

                <div class="shipping text-center">
                  <img src="images/home/shipping.jpg" alt="" />
                </div>
              </div>
            </div>

            <div class="col-sm-9 padding-right">
              <div class="features_items">
                <h2 class="title text-center">Product Brand</h2>
                {products.map((product) => (
                  <div key={product.id} className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                        <Link to={`/chi-tiet-san-pham/${product.attributes.slug}`}>

                          <img
                            src={`${imageURL}${product.attributes.image}`}
                            alt=""
                            style={{
                              maxWidth: "205.71px",
                              maxHeight: "137.14px",
                              width: "auto",
                              height: "auto",
                            }}
                          />
                          <h2>{formatPrice(product.attributes.price)}</h2>
                          <p className="product-name">
                            {product.attributes.name}
                          </p>
                          </Link>
                          <button
                            type="button"
                            className="btn btn-default add-to-cart"
                            onClick={() => addToCart(product, quantity, token)}
                          >
                            <i className="fa fa-shopping-cart"></i>
                            Add to cart
                          </button>
                        </div>
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

export default ProductBrand;
