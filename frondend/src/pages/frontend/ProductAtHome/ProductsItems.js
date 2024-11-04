import React, { useEffect, useState } from "react";
import apiProduct from "../../../api/apiProduct";
import { imageURL } from "../../../api/config";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useAuth } from "../../../component/Provider/AuthProvider";
function ProductItems() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const { token } = useAuth();
  const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();

  const formatPrice = (price) => {
    const roundedPrice = Math.round(price);
    const formattedPrice = new Intl.NumberFormat("vi-VN").format(roundedPrice);
    return formattedPrice.replace(/,/g, ".") + ".000";
  };
  const addToCart = (product, quantity) => {
    if (product && product.hasOwnProperty('attributes') && typeof product.attributes === 'object' && product.attributes !== null) {
      if (product.attributes.product_name && product.attributes.price && product.attributes.image) {
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
    } else {
      console.error("Không thể thêm sản phẩm vào giỏ hàng, thiếu thông tin sản phẩm");
    }
  };
  
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiProduct.getAllProductPagination(
          currentPage,
          productsPerPage
        );
        console.log("Dữ liệu sản phẩm từ API:", response.data);
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

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="features_items">
      <h2 className="title text-center">News Product</h2>
      {products.map((product) => (
        <div key={product.id} className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                {/* Kiểm tra và sử dụng tên trường hình ảnh chính xác từ dữ liệu sản phẩm */}
                <Link to={`/chi-tiet-san-pham/${product.attributes.slug}`}>

                  <img src={`${imageURL}${product.attributes.image}`}></img>
                  </Link>
                <Link to={`/chi-tiet-san-pham/${product.attributes.slug}`}>
                  {/* <h2>{product.attributes.price}</h2> */}
                  <h2>
                            {formatPrice(product.attributes.price)}
                            <sup>đ</sup>
                          </h2>
                </Link>
                {/* <p>{product.attributes.product_name}</p> */}
                <Link to={`/chi-tiet-san-pham/${product.attributes.slug}`}>
                <p className="product-name">
                  
                  {product.attributes.product_name}
                </p>
                </Link>


                


                <button
              type="button"
              className="btn btn-default add-to-cart"
              onClick={() => addToCart(product, quantity, token )}
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
  );
}

export default ProductItems;
