import "./Tarihce.css";
import tarihce from "../components/media/dumancoffeetarihce.jpg";
import karikatur from "../components/media/karikatur.jpg";
import Navbar from "../components/molecules/Navbar";
import Footer from "../components/molecules/Footer";

function Tarihce() {


  return (
      
      <div style={{ width: "100%" }} className="container-fluid" >
      <Navbar />
        <div className="image-column">
            <img src={karikatur}></img>
        </div>
        <div className="content-column">
          <div className="tarihce-content">
          <h2 className="tarihce-title">Biz Kimiz?</h2>
            <p>
              <strong>Duman Coffee Co.</strong>, 2020 yılının serin bir sonbahar
              sabahında Bolu’nun kalbinde, kahve tutkusunu benzersiz bir
              deneyime dönüştürme hayaliyle Erol DUMAN tarafından kuruldu. Duman kafenin kapıları ilk kez açıldığında, içeri dolan
              kahve kokusu sadece bir içecek değil, aynı zamanda bir topluluk
              olma ruhunu da beraberinde getirdi.
            </p>
            <p>
              <em>
                “Kahve, sadece bir içecek değil; paylaşılan anların,
                üretkenliğin ve samimi sohbetlerin temelidir.”
              </em>{" "}
              diyordu Erol DUMAN. Bu felsefe, Duman Kafe'nin her köşesine
              işlendi. Öğrencilerin ders çalışabileceği, remote çalışanların
              projelerine odaklanabileceği ve her yaştan kahveseverin huzur
              bulabileceği bir ortam yaratmak, kafenin ruhunu şekillendirdi.
            </p>
            <p>
              Yıllar geçtikçe, kahveye duyduğumuz sevgi ve topluluğumuza olan
              bağlılığımızla büyüdük. Artık sadece bir kafe değil,{" "}
              <strong>Duman Ailesi</strong> olarak anılır olduk. Her fincan
              kahvede, emeğimizin ve kahveye olan tutkumuzun izleri var.
            </p>
            <p>
              Bugün, <strong>Duman Coffee Co.</strong> sadece enfes kahveler
              sunmanın ötesine geçti; insanlara bir araya gelme, ilham alma ve
              hayatın koşuşturmacasında bir an olsun durup nefes alma imkânı
              tanıyan bir mekân haline geldi. Duman Kafe, samimi sohbetlerin
              paylaşıldığı, dostlukların pekiştiği ve yeni hikayelerin yazıldığı
              bir yer.
            </p>
          </div>
          <div>
            <Footer/>
        </div>
        </div>
        
      </div>
  );
}

export default Tarihce;
