import { useEffect, useState } from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import MaintenanceService from "../../services/MaintenanceServices";
import { showAlert, showErrorAlert } from "../../common/alerts";

export const MaintenanceList = (props) => {
  const [maintenances, setMaintenances] = useState([]);

  useEffect(() => {
    MaintenanceService.list(props.idProduct)
      .then((response) => {
        setMaintenances(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [props.idProduct]);

  const removeMaintenance = (id, idProduct) => {
    Swal.fire({
      title: "¿Desea eliminar el mantenimiento?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        MaintenanceService.remove(idProduct, id)
          .then(() => {
            showAlert("¡Correcto!", "Mantenimiento eliminado correctamente");
            window.location.reload();
          })
          .catch((e) => {
            showErrorAlert("¡Error!", "Error al intentar borrar");
            console.log(e);
          });
      }
    });
  };

  return (
    <div className="list row">
      <h4>Mantenimientos</h4>
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Fecha de Mantenimiento</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {maintenances &&
              maintenances.map((maintenance, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{maintenance.name}</td>
                  <td>{maintenance.description}</td>
                  <td>{maintenance.date}</td>
                  <td>
                    <em
                      style={
                        maintenance.state === "Activo"
                          ? { background: "#00BB2D" }
                          : { background: "red" }
                      }
                    >
                      {maintenance.state}
                    </em>
                  </td>
                  <td>
                    <div className="btn-group" role="group">
                      <Link
                        to={
                          "/products/" +
                          props.idProduct +
                          "/maintenances/retrieve/" +
                          maintenance.id
                        }
                        className="btn btn-warning"
                      >
                        <FaEye /> Ver
                      </Link>
                      <Link
                        to={
                          "/products/" +
                          props.idProduct +
                          "/maintenances/update/" +
                          maintenance.id
                        }
                        className="btn btn-primary"
                      >
                        <FaPen /> Editar
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          removeMaintenance(maintenance.id, props.idProduct)
                        }
                      >
                        <FaTrash /> Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
