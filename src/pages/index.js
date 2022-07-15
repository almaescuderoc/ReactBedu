import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function Index(){

    const [regalo, setRegalo] = useState([]);

    useEffect(function(){
        fetch('http://localhost:4002/v1/regalos', {method: 'GET'})
        .then(response => (response.json()))
        .then((data) => setRegalo(data))
        .catch(
            console.log("Hubo un error al cargar los datos")
        )
    }, []);
   

    // GET /productos - Lista de todos los productos
    // POST /productos - Crear un nuevo producto
    // PATCH/PUT - Actualizar un producto
    // GET /productos/:id - Obtiene un producto en particular
    
    return(
        <div className="container mt-4"> 
            <h1 className="text-center fw-bold">Lista de Regalos</h1>

            <div className="list-group mb-4">
                { 
                    regalo.map(({id_regalo, descripcion}) => (
                    <Link to={"/regalo/" + id_regalo} className="list-group-item list-group-item-action">
                        #{id_regalo} - <span className="text-capitalize">{descripcion}</span></Link>
                ))}
            </div>

        </div>
    )
}

export default Index;
