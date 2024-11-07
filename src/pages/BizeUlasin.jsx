import React, { useState } from "react";
import "./BizeUlasin.css";
import Navbar from "../components/molecules/Navbar";
import bizeulasin from "../components/media/bizeulasin5.jpg";
import Footer from "../components/molecules/Footer";
import AlertModal from "../components/molecules/AlertModal";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function BizeUlasin() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const contactData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:7075/api/contact/send",
        contactData
      );
      setModalMessage(response.data);
      setShowModal(true); // Modalı göster
      event.target.reset(); // Form alanlarını temizler
    } catch (error) {
      console.error("Mesaj gönderilirken bir hata oluştu", error);
    }
  };

  return (
    <div style={{ width: "100%" }} className="container-fluid">
      <Navbar />
      <div className="image-column">
        <img src={bizeulasin} alt="Bize Ulaşın" />
      </div>
      <div className="content-column">
        <h2>Bize Ulaşın</h2>
        <p>
          {" "}
          <FontAwesomeIcon icon={faPhone} /> +90 507 844 03{" "}
        </p>
        <br />
        <h4>Görüş ve Önerileriniz için;</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">İsim:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">E-posta:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Mesajınız:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Gönder</button>
        </form>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.408243250234!2d31.59839587602664!3d40.73104167139076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d3f97a0073c03%3A0xa0493223f3746f47!2sDumancoffeeco!5e0!3m2!1str!2str!4v1729780806782!5m2!1str!2str"
          width="600"
          height="450"
          style={{
            border: 0,
            width: "100%",
            height: "300px",
            marginTop: "20px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Duman Coffee Co Location"
        ></iframe>
        <Footer />
      </div>
      {showModal && (
        <AlertModal
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default BizeUlasin;
