import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import useAuth from "../hooks/useAuth.jsx";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "Cargando...";
  return (
    <>
      <Header />
      {auth ? (
        <main className="container mx-auto mt-10">
          <Outlet />
        </main>
      ) : 
        <Navigate to="/" />
      }
      <Footer />
    </>
  );
};

export default RutaProtegida;
