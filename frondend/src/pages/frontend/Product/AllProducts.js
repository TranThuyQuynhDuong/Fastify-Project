import React, { useEffect, useState } from "react";
import apiProduct from "../../../api/apiProduct";
import { imageURL } from "../../../api/config";
import Category from "../ProductAtHome/Category";
import Brand from "../ProductAtHome/Brand";
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { useAuth } from "../../../component/Provider/AuthProvider";

function AllProduct() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000000); // Adjust max price as needed
  const productsPerPage = 9;
  const { addItem } = useCart();
  const { token } = useAuth();
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price) => {
    const roundedPrice = Math.round(price);
    const formattedPrice = new Intl.NumberFormat("vi-VN").format(roundedPrice);
    return formattedPrice.replace(/,/g, ".") + ".000";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiProduct.getAllProductPagination(
          currentPage,
          productsPerPage
        );
        setProducts((prevProducts) => {
          if (currentPage === 1) {
            return response.data;
          } else {
            const newProducts = response.data.filter((newProduct) => {
              return !prevProducts.some(
                (oldProduct) => oldProduct.id === newProduct.id
              );
            });
            return [...prevProducts, ...newProducts];
          }
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const addToCart = (product, quantity) => {
    if (product && product.attributes && product.attributes.product_name && product.attributes.price && product.attributes.image) {
      addItem({
        id: product.id,
        name: product.attributes.product_name,
        price: product.attributes.price,
        quantity: 1,
        image: product.attributes.image,
        user_id: token,
      });
      alert("Đã thêm vào giỏ hàng !");
    } else {
      console.error("Không thể thêm sản phẩm vào giỏ hàng, thiếu thông tin sản phẩm");
    }
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(parseInt(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseInt(event.target.value));
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const response = await apiProduct.getProductsByPriceRange(
          minPrice,
          maxPrice,
          productsPerPage
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    };

    fetchFilteredProducts();
  }, [minPrice, maxPrice]);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <Category />
                <div className="brands_products">
                  <Brand />
                </div>

                {/* <div className="price-range">
                  <h2>Price Range</h2>
                  <div className="well">
                    <input
                      type="range"
                      min="0"
                      max="50000000"
                      step="100000"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                    <br />
                    <b>${minPrice}</b> <b className="pull-right">${maxPrice}</b>
                    <br />
                    <input
                      type="range"
                      min="0"
                      max="50000000"
                      step="100000"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                </div> */}

                <div className="shipping text-center">
                  <img src="images/home/shipping.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">All Product</h2>
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
                          </Link>
                          <h2>{formatPrice(product.attributes.price)}</h2>
                          <p className="product-name">
                            {product.attributes.product_name}
                          </p>
                          <button
                            type="button"
                            className="btn btn-default add-to-cart"
                            onClick={() => addToCart(product, quantity)}
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
              <ul className="pagination">
                <li>
                  <button onClick={handleLoadMore}>&raquo; Xem Thêm</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllProduct;
