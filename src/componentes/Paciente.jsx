import React from "react";

const Paciente = ({paciente}) => {
    const {nombre, propietario, email, fecha, sintomas} = paciente;
    console.log(paciente)
    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold text-gray-700 uppercase">Mascota: {''}
                <span className="font-normal  normal-case">{nombre}</span>
            </p>
            <p className="font-bold text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal mb-3 normal-case">{propietario}</span>
            </p>
            <p className="font-bold text-gray-700 uppercase">Email: {''}
                <span className="font-normal mb-3 normal-case">{email}</span>
            </p>
            <p className="font-bold text-gray-700 uppercase">Fecha alta: {''}
                <span className="font-normal mb-3 normal-case">{fecha}</span>
            </p>
            <p className="font-bold text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal mb-3 normal-case">{sintomas} </span>
            </p>
        </div>
    )
}

export default Paciente;
