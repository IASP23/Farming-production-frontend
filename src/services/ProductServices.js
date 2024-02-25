import { showAlert, showErrorAlert } from "../common/alerts";
import http from "../http-common";

const create = async (data) => {
  const url = `/products`;
  try {
    const response = await http.post(url, data);
    console.log(response);
    showAlert("¡Correcto!", "Producto agregado correctamente");
  } catch (err) {
    console.error(err);
    showErrorAlert("¡Error!", "El Producto no pudo ser agregado");
  }
};

const retrieve = async (id) => {
  return await http.get(`/products/${id}`);
};

const update = async (data) => {
  const url = `/products/${data.id}`;
  try {
    const response = await http.put(url, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response);
    showAlert("¡Correcto!", "Producto actualizado correctamente");
  } catch (err) {
    console.error(err);
    showErrorAlert("¡Error!", "El Producto no pudo ser actualizado");
  }
};

const remove = async (id) => {
  const url = `/products/${id}`;
  try {
    const response = await http.delete(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response);
    showAlert("¡Correcto!", "Producto eliminado correctamente");
  } catch (err) {
    console.error(err);
    showErrorAlert("¡Error!", "El Producto no pudo ser eliminado");
  }
};

const list = async (page, size, sort) => {
  const urlRequest = "/products/" + page + "/" + size;
  console.log(urlRequest);
  return await http.get(urlRequest, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

const count = async () => {
  const response = await http.get("/products/count", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

const ProductService = {
  create,
  retrieve,
  update,
  remove,
  list,
  count,
};

export default ProductService;
