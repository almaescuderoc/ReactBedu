function Regalo({number, name, costo, estrellas}) {
    return(
        <div className="card" style={{width: "18rem"}}>
            
            <div className="card-body">
                <h5 className="card-title text-capitalize">{number}.{name} ${costo}#{estrellas}</h5>
                
            </div>
        </div>
    )
}

export default Regalo;