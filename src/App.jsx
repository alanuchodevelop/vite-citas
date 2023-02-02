import Header from "./componentes/Header.jsx";
import Formulario from "./componentes/Formulario.jsx";
import ListadoPacientes from "./componentes/ListadoPacientes.jsx";
// componente principal de la aplicación
function App() {

    const sumar = () =>  {
        /**Se pueden meter logica de funcion*/
        console.log(2 + 2)
    }

    const edad = 12;

    sumar();
    return (
        <div className="container mx-auto">
            <Header/>
            <Formulario/>
            <ListadoPacientes/>
           {/* {1+1}
            {edad >= 18 ? 'Mayor de edad': 'Mo es mayor de edad'}
            <h1>{'Hola Mundo'.toLowerCase()}</h1>*/}
        </div>
    )
}

export default App
