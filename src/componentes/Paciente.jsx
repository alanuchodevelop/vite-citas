import React from "react";

const Paciente = () => {
    return (
        <div className="mx-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold text-gray-700 uppercase">Propietario: {''}</p>
            <span className="font-normal mb-3 normal-case">Juan</span>
            <p className="font-bold text-gray-700 uppercase">Email: {''}</p>
            <span className="font-normal mb-3 normal-case">correo@correo.gmail.com</span>
            <p className="font-bold text-gray-700 uppercase">Fecha alta: {''}</p>
            <span className="font-normal mb-3 normal-case">10 diciembre 2022</span>
            <p className="font-bold text-gray-700 uppercase">Sintomas: {''}</p>
            <span className="font-normal mb-3 normal-case">Lorem asdasdasdasd asdasdasd asdasdasd asdasd asdasdasd asdadsasdasddasd asdasd
                asdasdasdasdasdasdasdasdasdasdadasd asdasdadasd asdasdasdasdada </span>
        </div>
    )
}

export default Paciente;
