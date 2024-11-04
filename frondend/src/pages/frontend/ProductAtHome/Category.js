import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import categoryservice from "../../../api/apiCategory";
import productService from "../../../api/apiProduct";

function Category({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [expandedMenus, setExpandedMenus] = useState({});
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const toggleExpanded = (menu) => {
    setExpandedMenus(prevState => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryservice.getAll();
        if (response.data && response.data.length > 0) {
          // Filter categories with status === 1
          const categoriesArray = response.data.filter(category => category.status === 1);
          setCategories(categoriesArray);
          const initialExpandedMenus = categoriesArray.reduce((acc, category) => {
            const normalizedName = normalizeName(category.category_name);
            return { ...acc, [normalizedName]: false };
          }, {});
          setExpandedMenus(initialExpandedMenus);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  
    fetchCategories();
  }, []);
  
  const normalizeName = (name) => {
    if (name) {
      return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
    return "";
  };

  const fetchSubCategories = async (parent) => {
    try {
      const response = await categoryservice.getCatByParent(parent);
      return response.data;
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      return [];
    }
  };

  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await productService.getProductByCategory(categoryId);
      if (response.data && response.data.length > 0) {
        setProducts(response.data);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    }
  };

  const handleCategorySelect = async (category) => {
    if (onCategorySelect && typeof onCategorySelect === 'function') {
      onCategorySelect(category.id);
    }
    navigate(`/san-pham-theo-danh-muc/${category.id}`);
    await fetchProductsByCategory(category.id);
  };

  const handleCategoryExpand = async (category) => {
    const categoryName = normalizeName(category.category_name);
    if (!expandedMenus[categoryName]) {
      const subCategories = await fetchSubCategories(category.id);
      if (subCategories && subCategories.length > 0) {
        const updatedCategories = [...categories, ...subCategories];
        setCategories(updatedCategories);
      }
    }
    toggleExpanded(categoryName);
  };

  return (
    <>
      <h2>Category</h2>
      <div className="panel-group category-products" id="accordion">
        {categories.map(category => (
          category.parent === 0 && (
            <div className="panel panel-default" key={category.id}>
              <div className="panel-heading">
                <h4 className="panel-title">
                  <Link
                    to={(`/san-pham-theo-danh-muc/${category.id}`)}
                    onClick={() => {
                      handleCategoryExpand(category);
                      handleCategorySelect(category);
                    }}
                  >
                    <span className="badge pull-right">
                      <i className={expandedMenus[normalizeName(category.category_name)]}></i>
                    </span>
                    {category.category_name}

                  </Link>
                </h4>
              </div>
              {/* <div
                id={`submenu-${normalizeName(category.category_name)}`}
                className={`panel-collapse collapse ${expandedMenus[normalizeName(category.category_name)] ? 'in' : ''}`}
              >
                <div className="panel-body">
                  <ul>
                    {categories
                      .filter(subCategory => subCategory.parent === category.id)
                      .map(subCategory => (
                        <li key={subCategory.id}>
                          <Link to={(`/san-pham-theo-danh-muc/${category.id}`)} onClick={() => handleCategorySelect(subCategory)}>
                            {subCategory.category_name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div> */}
            </div>
          )
        ))}
      </div>
      <div>
  {products.length > 0 && (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )}
</div>

    </>
  );
}

export default Category;
