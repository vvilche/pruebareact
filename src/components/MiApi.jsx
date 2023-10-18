// Componente MiApi
import axios from "axios";
import { useState, useEffect } from "react";
import Buscador from "./FiltroYBusqueda";


const MiApi = () => {
  const [personajes, setPersonajes] = useState([]);
  
  
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        setPersonajes(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ordenarPor = (personaje1, personaje2) => {

    return personaje1.name.localeCompare(personaje2.name);
    };


    /* const mostrarPersonajes = personajes
    .filter((personajes) => personajes.name.toLowerCase().includes(search.toLowerCase()))
    .sort(ordenarPor)
    .map ((personaje) => (
     <div key={personajes.id} className="col" >
        <div className="card h-100">
        <img
              src={personaje.image}
              className="card-img-top"
              alt={'Foto' + personaje.name}
            />
            <div className="card-body">
            <h5 className="card-title">{personaje.name}</h5>
            <p className="card-text">{personaje.species}</p>
            <p className="card-text">{personaje.gender}</p>         
            </div>

        </div> 
    </div>
    )); 

    */




  return (
    <div>
<main>
<Buscador placeholder={"Buscar por Nombre"} personajes={personajes} /> 
</main>
    </div>
  );
};

export default MiApi;

