import { showAlert, showErrorAlert } from "../common/alerts";
import http from "../http-common";

const login = async (data) => {
  const url = `/users/login`;
  try {
    const response = await http.post(url, data);
    localStorage.setItem("token", response.data.token);
    showAlert("¡Correcto!", "Usuario acreditado correctamente");
  } catch (err) {
    console.error(err);
    showErrorAlert("¡Error!", "Usuario no acreditado");
  }
};

const register = async (data) => {
  const url = `/users`;
  try {
    const response = await http.post(url, data);
    showAlert("¡Correcto!", "Usuario  correctamente");
  } catch (err) {
    console.error(err);
    showErrorAlert("¡Error!", "Usuario incorrecto");
  }
};

const UserService = {
  login,
  register,
};
export default UserService;
