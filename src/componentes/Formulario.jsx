import {useEffect, useState} from "react";

function Formulario() {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);
    const handleSubmit = (e) => {

        e.preventDefault();
        // validacion del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('hay campos vacioes')
            setError(true)
        } else {
            console.log('todo bien')
            setError(false)
        }
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añadir Pacientes y {''}
                <span className="text-indigo-600">Administralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5" onSubmit={handleSubmit}>
                {error && (<div className="bg-red-700 text-white p-3 uppercase text-center rounded">
                    <p>Hay un error</p>
                </div>)}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input type="text"
                           id="mascota"
                           placeholder="Nombre de la mascota"
                           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
                           value={nombre}
                           onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre
                        Propietario</label>
                    <input type="text"
                           id="propietario"
                           placeholder="Nombre del propietario"
                           value={propietario}
                           onChange={(e) => setPropietario(e.target.value)}
                           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Nombre
                        Propietario</label>
                    <input type="text"
                           id="email"
                           placeholder="Ingresar email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="fecha_alta" className="block text-gray-700 uppercase font-bold">Fecha Alta</label>
                    <input type="date"
                           id="fecha_alta"
                           placeholder="Ingresar email"
                           value={fecha}
                           onChange={(e) => setFecha(e.target.value)}
                           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea type="alta"
                              id="sintomas"
                              value={sintomas}
                              onChange={(e) => setSintomas(e.target.value)}
                              placeholder="Describe los sintomas"
                              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"/>
                </div>

                <input
                    role="button"
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value="Agregar paciente"
                />
            </form>
        </div>
    )
}

export default Formulario;
