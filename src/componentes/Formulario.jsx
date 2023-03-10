import {useEffect, useState} from "react";
// componete de error
import Error from './Error';

function Formulario({pacientes, setPacientes}) {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha  =  Date.now().toString(36);
        return random + fecha;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // validacion del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
        } else {
            setError(false)

            // objeto para guardar la moscota paciente
            const objetoPaciente = [{
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
                id: generarId()
            }];
            // se pasa una copia del arreglo
            setPacientes([...pacientes, objetoPaciente]);

            // reincio de formulario
            setNombre('');
            setPropietario('');
            setEmail('');
            setFecha('');
            setSintomas('');
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

                {error && <Error mensaje='Todos los campos son obligatorios' />}
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
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email</label>
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
