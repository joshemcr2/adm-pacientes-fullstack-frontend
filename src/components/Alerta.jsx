import React from "react";

const Alerta = ({ alerta }) => {
  return (
    <>
      <div
        className={`${
          alerta.error
            ? "from-red-400 to-red-600 "
            : "from-indigo-400 to-indigo-600"
        } bg-gradient-to-r uppercase text-center text-white font-bold rounded-md p-3 mb-10`}
      >
        {alerta.msg}
      </div>
    </>
  );
};

export default Alerta;
