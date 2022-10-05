import React from "react";

const Listkeep = (props)=>{
    return(
        <div className="card mx-2 my-3" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{props.tittle}</h5>
                                <p className="card-text">{props.note}</p>
                                <a onClick={props.func} href="#" className="btn btn-primary">Delete</a>
                            </div>
        </div>
    )
}

export default Listkeep