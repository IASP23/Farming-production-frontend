import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-light">
      <section className="p-2">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Farming Production
              </h6>
              <p>
                Gestión Productiva S.A. empresa líder en el campo de la gestión
                de productos, dedicada a optimizar y potenciar la producción de
                diversas industrias a través de soluciones innovadoras y
                tecnológicas.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Informacion</h6>
              <p>
                Nuestro enfoque se centra en ofrecer herramientas integrales y
                servicios especializados que permiten a las empresas maximizar
                su eficiencia, reducir costos y mejorar la calidad de sus
                productos.
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <i className="fas fa-home me-3"></i> Latacunga, BL 10012, LT
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                alexander573@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 593 97894 1377
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Alexander.com
        </a>
      </div>
    </footer>
  );
}
