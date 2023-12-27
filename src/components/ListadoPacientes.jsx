import React from "react";
import usePacientes from "../hooks/usePacientes.jsx";
import Paciente from "./Paciente.jsx";

const ListadoPacientes = () => {
  const { pacientes } = usePacientes();
  return (
    <>
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado De Pacientes
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente 
            key={paciente._id} 
            paciente={paciente} 
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza Agregando Pacientes {""}
            <span className="text-indigo-600 font-bold">
              y Apareceran en este Lugar
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default ListadoPacientes;
