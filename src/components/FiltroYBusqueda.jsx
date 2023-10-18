import  { useState } from "react";

const Buscador = ({ placeholder, personajes }) => {
  const [search, setSearch] = useState("");

  //const mostrarPersonajes = personajes.filter((personaje) =>
    //personaje.name.toLowerCase().includes(search.toLowerCase())
  //);


  const mostrarPersonajes = ! search ? personajes : personajes.filter((personaje) => personaje.name.toLowerCase().includes(search.toLowerCase()));

  

  return (

    <div className="tarjeta-container">
      <input className="container-fluid bg-body-tertiary alert-success padding-10px mt-5 mb-5" 
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {mostrarPersonajes.map((personaje) => (
        <div key={personaje.id} className="col">
          <div className="card-personaje">
            <img
              src={personaje.image}
              className="card-img-top"
              alt={`Foto ${personaje.name}`}
            />
            <div className="card-body">
              <h5 className="card-title">{personaje.name}</h5>
              <p className="card-text">{personaje.species}</p>
              <p className="card-text">{personaje.gender}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Buscador;


