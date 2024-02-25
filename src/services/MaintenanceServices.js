import { showAlert, showErrorAlert } from "../common/alerts";
import http from "../http-common";

const create = async (data) => {
  console.log(data);
  const url = `/products/${data.product.id}/maintenances`;
  try {
    const response = await http.post(url, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response);
    showAlert("¡Correcto!", "Mantenimiento agregado correctamente");
  } catch (err) {
    console.error(err);
    showErrorAlert("¡Error!", "El mantenimiento no pudo ser agregado");
  }
};

const retrieve = async (idProduct, id) => {
  return await http.get(`/products/${idProduct}/maintenances/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

const update = async (data) => {
  const url = `/products/${data.product.id}/maintenances/${data.id}`;
  try {
    const response = await http.put(url, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response);
    showAlert("¡Correcto!", "Mantenimiento actualizado correctamente");
  } catch (err) {
    console.error(err);
    showErrorAlert("¡Error!", "El mantenimiento no pudo ser actualizado");
  }
};

const remove = async (idProduct, id) => {
  const url = `/products/${idProduct}/maintenances/${id}`;
  try {
    const response = await http.delete(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response);
    showAlert("¡Correcto!", "Mantenimiento eliminado correctamente");
  } catch (err) {
    console.error(err);
    showErrorAlert("¡Error!", "El mantenimiento no se eliminó");
  }
};

const list = async (idProduct) => {
  const url = `/products/${idProduct}/maintenances`;
  return await http.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

const MaintenanceService = {
  create,
  retrieve,
  update,
  remove,
  list,
};

export default MaintenanceService;
