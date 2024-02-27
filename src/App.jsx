import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/Home";
import UserLogin from "./components/user/UserLogin";
import { ProductList } from "./components/product/ProductList";
import { ProductForm } from "./components/product/ProductForm";
import { ProductCard } from "./components/product/ProductCard";
/* Maintenance */

import { MaintenanceCard } from "./components/maintenance/MaintenanceCard";
import { MaintenanceForm } from "./components/maintenance/MaintenanceForm";
import UserRegister from "./components/user/UserRegister";

const title = "Farming Production";
const description = "Aplicación web para el control de productos agricolas";

const background =
  "https://img.freepik.com/vector-gratis/ilustracion-profesion-agricultura-plana-organica_23-2148899111.jpg?w=1060&t=st=1661907556~exp=1661908156~hmac=22a714f7ba25b2420f10e5c1acfd969023e35598028085ddc8b20f86154a08f8";
const containerSyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  width: "100%",
  height: "1080px",
};

function App() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/users/login");
  };

  return (
    <>
      <div style={containerSyle}>
        <nav className="navbar navbar-expand navbar-dark bg-dark p-4">
          <Link to={"/"} className="navbar-brand">
            FARMING
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Registrar
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/users/login"} className="nav-link">
                Iniciar Sesión
              </Link>
            </li>
            <li>
              <button className="btn btn-warning" onClick={logout}>
                Cerrar Sesion
              </button>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/register" element={<UserRegister />} />
            <Route
              path="/"
              element={<Home title={title} description={description} />}
            />
            <Route path="/users/login" element={<UserLogin />} />
            {/* Rutas de products */}
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/create" element={<ProductForm />} />
            <Route path="/products/retrieve/:id" element={<ProductCard />} />
            <Route path="/products/update/:id" element={<ProductForm />} />
            {/* Maintenances routes */}
            <Route
              path="/products/:idProduct/maintenances/create"
              element={<MaintenanceForm />}
            />
            <Route
              path="/products/:idProduct/maintenances/retrieve/:id"
              element={<MaintenanceCard />}
            />
            <Route
              path="/products/:idProduct/maintenances/update/:id"
              element={<MaintenanceForm />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
