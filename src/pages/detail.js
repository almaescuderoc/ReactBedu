import Regalo from '../components/regalos';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail() {
    const params = useParams();

    const [regalo, setRegalo] = useState(null);

    useEffect(function(){
        
        fetch('http://localhost:4002/v1/regalos/' + params.id)
        .then(response => response.json())
        .then((data) => setRegalo(data));
    }, [])

    return(
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
            {
                regalo ? (
                <Regalo 
                number = {regalo.id_regalo}
                name={regalo.descripcion}
                costo={regalo.costo}
                estrellas={regalo.estrellas_promedio}
                />
                ) : null 
            } 
        </div>
    )
}

export default Detail;