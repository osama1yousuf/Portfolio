import React from "react";


const Servicecard = (props) => {
    return (
        <>
            <div className="card" style={{width: "300px" , marginLeft:"40px",marginBottom:"20px" , height:"auto"}}>
                <img src={props.image} className="card-img-top" alt="imgtittle" />
                    <div className="card-body">
                        <h5 className="card-title">{props.tittle}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Check now</a>
                    </div>
            </div>
        </>
    )
}

export default Servicecard;