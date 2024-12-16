import Navbar from "../components/molecules/Navbar";
import { Video } from "reactjs-media";
import v60 from "../components/media/Images/v60.jpg";
import kahveler from "../components/media/Images/kahveler.jpg";
import dumancon from "../components/media/Videos/dumancon.mp4";
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
      <Navbar />
      <div className="video-column gap-3">
        <Video src={dumancon} controls={true} />
      </div>
      <div className="content-column">
        <div className="">
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
