import logo from "../assets/Farm.svg";

export const Home = ({ title, description }) => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">{title}</h1>
      <img
        src={logo}
        className="d-block mx-auto mb-4"
        height="300"
        alt="logo"
      />

      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{description}</p>
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
    </div>
  );
};
