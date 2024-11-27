import { useState, useEffect } from "react";
import Navbar from "../components/molecules/Navbar";
import ProductCard from "../components/molecules/ProductCard";
import "./MenuPage.css";

function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    // Fetch categories
    fetch('http://localhost:1416/duman/CATEGORY/all')
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
          setCategories(data.data);
        }
      })
      .catch(error => console.error('Error fetching categories:', error));

    // Fetch products
    fetch('http://localhost:1416/duman/PRODUCT/all')
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
          setProducts(data.data);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleMouseEnter = (category, index) => {
    setHoveredItem({ category, index });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const isHovered = (category, index) => {
    return (
      hoveredItem &&
      hoveredItem.category === category &&
      hoveredItem.index === index
    );
  };

  const getProductsByCategory = (categoryId) => {
    return products.filter(product => product.categoryId === categoryId);
  };

  return (
    <div className="container-fluid menu-container">
      <Navbar />
      <div className="menu-content">
        <div className="menu-left">
          {categories.map((category, catIndex) => (
            <div className="menu-section" key={catIndex}>
              <h4>{category.name}</h4>
              <ul>
                {getProductsByCategory(category.id).map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => handleMouseEnter(category.id, index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="menu-right">
          {categories.map((category, catIndex) => (
            <div className="menu-section" key={catIndex}>
              <h4>{category.name}</h4>
              <div className="menu-cards">
                {getProductsByCategory(category.id).map((item, index) => (
                  <ProductCard
                    key={index}
                    item={item}
                    isHovered={isHovered(category.id, index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
