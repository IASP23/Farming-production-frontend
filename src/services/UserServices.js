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

const UserService = {
  login,
};
export default UserService;
