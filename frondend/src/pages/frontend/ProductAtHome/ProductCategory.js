import React, { useState, useEffect } from "react";
import { imageURL } from "../../../api/config";
import apiProduct from "../../../api/apiProduct";
import apiCategory from "../../../api/apiCategory";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useAuth } from "../../../component/Provider/AuthProvider";

function ProductCategorys() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const { addItem } = useCart();
  const { token } = useAuth();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách các danh mục cha từ API
        const categoriesData = await apiCategory.getCatByParent(0);
        setCategories(categoriesData);
        // Mặc định hiển thị sản phẩm của danh mục đầu tiên
        if (categoriesData.length > 0) {
          const categoryId = categoriesData[0].id;
          setActiveTab(categoryId);
          fetchProducts(categoryId);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);
  const addToCart = (product) => {
    if (product && typeof product === 'object' && product !== null) {
      if (product.name && product.price && product.image) {
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
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
  
  

  // Hàm lấy sản phẩm theo danh mục và tag
  const fetchProducts = async (categoryId) => {
    try {
      // Sử dụng API để lấy dữ liệu sản phẩm
      const productsData = await apiProduct.getProductByCategory(categoryId);
      console.log(productsData);

      // Kiểm tra nếu có dữ liệu sản phẩm
      if (productsData && productsData.data.data) {
        // Lưu dữ liệu sản phẩm vào state products
        setProducts(productsData.data.data.slice(0, 4));
      } else {
        // Nếu không có dữ liệu sản phẩm, đặt products thành mảng trống
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Xử lý khi tab được chọn
  const handleTabClick = (categoryId) => {
    setActiveTab(categoryId); // Cập nhật tab được chọn
    fetchProducts(categoryId); // Lấy sản phẩm theo category_id
  };
  const formatPrice = (price) => {
    const roundedPrice = Math.round(price);
    const formattedPrice = new Intl.NumberFormat("vi-VN").format(roundedPrice);
    return formattedPrice.replace(/,/g, ".") + ".000";
  };

  return (
    <div className="category-tab">
      <div className="col-sm-12">
        <ul className="nav nav-tabs">
          {categories.map((category) => (
            <li key={category.id} className={activeTab === category.id ? "active" : ""}>
              <a
                href={`#${category.id}`}
                data-toggle="tab"
                onClick={() => handleTabClick(category.id)}
              >
                {category.category_name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-sm-3" key={product.id}>
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                  <Link to={`/chi-tiet-san-pham/${product.slug}`}>
                    <img
                      src={`${imageURL}/${product.image}`}
                      alt=""
                      style={{
                        maxWidth: "146.35px",
                        maxHeight: "97.56px",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                    
                    <h2> {formatPrice(product.price)}</h2>
                    <p className="product-name1">{product.name}</p>
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
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default ProductCategorys;
