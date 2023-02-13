import {useState} from "react";
import Header from "./componentes/Header.jsx";
import Formulario from "./componentes/Formulario.jsx";
import ListadoPacientes from "./componentes/ListadoPacientes.jsx";
// componente principal de la aplicación
function App() {

    const [pacientes, setPacientes] = useState([]);
    return (
        <div className="container mx-auto mt-20">
            <Header/>
            <div className="mt-12 m-8 md:flex">
                <Formulario/>
                <ListadoPacientes/>
            </div>
        </div>
    )
}

export default App
