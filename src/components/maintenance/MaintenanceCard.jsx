import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import MaintenanceService from "../../services/MaintenanceServices";
import ProductService from "../../services/ProductServices";

export const MaintenanceCard = () => {
  const { id, idProduct } = useParams();

  //Hooks para gestionar el modelo
  const [maintenance, setMaintenance] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (idProduct) {
      ProductService.retrieve(+idProduct)
        .then((response) => {
          setProduct(response.data);
          //console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    if (id && idProduct) {
      MaintenanceService.retrieve(+idProduct, +id)
        .then((response) => {
          setMaintenance(response.data);
          //console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [id, idProduct]);

  return (
    <div>
      {maintenance ? (
        <div>
          <h2>{maintenance.name}</h2>
          <p>{maintenance.description}</p>
          <p>{maintenance.date}</p>
          <br />
          <div className="btn-group" role="group">
            <Link
              to={`/products/retrieve/${idProduct}`}
              className="btn btn-primary"
            >
              <FaArrowLeft /> Volver
            </Link>

            <Link
              to={`/products/${idProduct}/maintenances/${id}/create`}
              className="btn btn-success"
            >
              <FaArrowLeft /> Agregar Insumos
            </Link>
          </div>
        </div>
      ) : (
        <h1>No hay un insumo activo</h1>
      )}
    </div>
  );
};
