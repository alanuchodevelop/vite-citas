import Paciente from "./Paciente.jsx";


function ListadoPacientes() {

    return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h1 className="font-black text-3xl text-center">Desde listado</h1>
            <p className="text-xl mt-5 text-center mb-10">Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            <Paciente/>
        </div>
    )
}

export default ListadoPacientes;
