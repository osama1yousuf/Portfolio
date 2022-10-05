import React  from "react";

const Commonpage =  (props) =>{
    return(
        <>
        <div style={{display:"flex"}}>
            <div className="mx-5 mt-5">
                <h1 style={{fontFamily:"-moz-initial"}}>{props.mainhead}</h1>
                <h1 style={{ fontFamily:"Roboto", color: "#7c86fc" }}>Osum Tech</h1>
                <p style={{color:"gray"}}>We are team of talented developer for making website</p>
                <button className="btn btn-outline-secondary rounded-pill">{props.btn}</button>
            </div>
            <div style={{marginTop:"30px",marginLeft:"100px"}}>
                <img style={{width:"420px", height:"300px"}} src={props.img1} ait="img"/>
            </div>
        </div>
        </>
    )
}

export default Commonpage;