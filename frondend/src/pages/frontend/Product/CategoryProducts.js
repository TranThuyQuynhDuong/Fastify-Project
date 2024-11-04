import React, { useEffect, useState } from "react";
import apiProduct from "../../../api/apiProduct";
import { imageURL } from "../../../api/config";
import { Link, useParams } from "react-router-dom";
import Category from "../ProductAtHome/Category";
import Brand from "../ProductAtHome/Brand";
import PriceRange from "../ProductAtHome/PriceRange";

function CategoryProduct() {
  const [products, setProducts] = useState([]);
  const { id } = useParams(); // Lấy id từ URL
  const [loading, setLoading] = useState(true);

  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await apiProduct.getProductByCategory(categoryId);
      console.log(response);
      if (response.data && Array.isArray(response.data.data)) {
        setProducts(response.data.data); // Gán danh sách sản phẩm
      } else {
        console.error("Response data is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Kết thúc quá trình tải dữ liệu
    }
  };

  useEffect(() => {
    fetchProductsByCategory(id); // Gọi API với id từ URL
  }, [id]);

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
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <Category onCategorySelect={fetchProductsByCategory} />
                <div className="brands_products">
                  <Brand />
                </div>
                {/* <PriceRange/> */}
                
              </div>
            </div>
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Product</h2>
                {products.map((product) => (
                  <div key={product.id} className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                        <Link to={`/chi-tiet-san-pham/${product.slug}`}>

                          {product.image && (
                            <img
                              src={`${imageURL}${product.image}`}
                              alt=""
                              style={{
                                maxWidth: "205.71px",
                                maxHeight: "137.14px",
                                width: "auto",
                                height: "auto",
                              }}
                            />
                          )}
                          <h2>{formatPrice(product.price)}</h2>
                          <p className="product-name">
                            {product.name}
                          </p>
                          </Link>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>Add to cart
                          </a>
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

export default CategoryProduct;
