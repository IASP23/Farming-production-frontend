import Swal from "sweetalert2";

export const showAlert = (title, message) => {
  console.log(title);
  Swal.fire({
    icon: "success",
    title: title,
    text: message,
    confirmButtonText: "Aceptar",
  });
};

export const showErrorAlert = (title, message) => {
  Swal.fire({
    icon: "error",
    title: title,
    text: message,
    confirmButtonText: "Aceptar",
  });
};
