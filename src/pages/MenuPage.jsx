import { useState } from "react";
import Navbar from "../components/molecules/Navbar";
import ProductCard from "../components/molecules/ProductCard";
import "./MenuPage.css";
import {
  espressoHardItems,
  espressoSoftItems,
  sicaklarItems,
  sogukKahveItems,
  freshItems,
} from "./MenuItems";

function MenuPage() {
  const [hoveredItem, setHoveredItem] = useState(null); // Changed to store category and index

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

  return (
    <div className="container-fluid menu-container">
      <Navbar />
      <div className="menu-content">
        <div className="menu-left">
          <div className="menu-section">
            <h4>Espresso Hard</h4>
            <ul>
              {espressoHardItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter("espressoHard", index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-section">
            <h4>Espresso Soft</h4>
            <ul>
              {espressoSoftItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter("espressoSoft", index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-section">
            <h4>Sıcaklar</h4>
            <ul>
              {sicaklarItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter("sicaklar", index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-section">
            <h4>Soğuk Kahveler</h4>
            <ul>
              {sogukKahveItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter("sogukKahve", index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-section">
            <h4>Fresh</h4>
            <ul>
              {freshItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter("fresh", index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="menu-right">
          <div className="menu-section">
            <h4>Espresso Hard</h4>
            <div className="menu-cards">
              {espressoHardItems.map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  isHovered={isHovered("espressoHard", index)}
                />
              ))}
            </div>
          </div>

          <div className="menu-section">
            <h4>Espresso Soft</h4>
            <div className="menu-cards">
              {espressoSoftItems.map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  isHovered={isHovered("espressoSoft", index)}
                />
              ))}
            </div>
          </div>

          <div className="menu-section">
            <h4>Sıcaklar</h4>
            <div className="menu-cards">
              {sicaklarItems.map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  isHovered={isHovered("sicaklar", index)}
                />
              ))}
            </div>
          </div>

          <div className="menu-section">
            <h4>Soğuk Kahveler</h4>
            <div className="menu-cards">
              {sogukKahveItems.map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  isHovered={isHovered("sogukKahve", index)}
                />
              ))}
            </div>
          </div>

          <div className="menu-section">
            <h4>Fresh İçecekler</h4>
            <div className="menu-cards">
              {freshItems.map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  isHovered={isHovered("fresh", index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
