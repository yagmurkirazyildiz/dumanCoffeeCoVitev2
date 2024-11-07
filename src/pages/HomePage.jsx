import Navbar from "../components/molecules/Navbar";
import kahve from "../components/media/dumanreklam.jpg";
import caramelmac from "../components/media/caramelmac.jpg";
import v60 from "../components/media/v60.jpg";
import kahveler from "../components/media/kahveler.jpg";

import Card from "../components/molecules/Card";
import "./HomePage.css";
import Footer from "../components/molecules/Footer";

function HomePage() {
  const cardData = [
    {
      title: "BEST COFFEE EVER!!!",
      description: "Bolunun en iyi kahvesi için Duman Coffee için!",
      image: caramelmac,
    },
    {
      title: "AMAZING COFFEE FLAVORS!",
      description: "Duman Coffee'de çeşitli kahve tatlarını keşfedin!",
      image: kahveler,
    },
    {
      title: "FRESHLY BREWED EVERY DAY!",
      description: "Her gün taze kahve ile kahve deneyiminizi yaşayın!",
      image: v60,
    },
  ];

  return (
    <div style={{ width: "100%" }} className="container-fluid">
      <Navbar/>
      <div className="image-column gap-3">
        <img src={kahve} alt="Descriptive Image Text" />
      </div>
      <div className="content-column">
        <div className="d-grid gap-3">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
