import Gallery from "../Gallery";
import logo from "../assets/Farm.svg";
import Footer from "./Footer";

export const Home = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={logo} height="300" alt="logo" />

      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4 text-black">{description}</p>
        <div className="card">
          <img
            src="https://conceptoabc.com/wp-content/uploads/2021/07/Agricultura.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Controla tu producción</h5>
            <p className="card-text">
              Mejora tu producción con una aplicación web para el control de
              productos agricolas.
            </p>
          </div>
        </div>
      </div>

      <Gallery />

      <Footer />
    </div>
  );
};
