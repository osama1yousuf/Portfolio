import React from "react";
import Servicecard from "./Servicecard";
  const servicedata =[
    {
        tittle : "Web Development",
        image : `https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?`
    },
    {
        tittle : "App Development",
        image : "https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?s=612x612"
    }
    ,{
        tittle : "Software Development",
        image : "https://media.istockphoto.com/photos/data-scientists-male-programmer-using-laptop-analyzing-and-developing-picture-id1295900106"
    }
    ,{
        tittle : "Digital Marketing",
        image : "https://media.istockphoto.com/photos/digital-marketing-picture-id1222811180?k=20&m=1222811180&s=612x612&w=0&h=pbx0i1gHDYn1vgQlCaFcOHP2GW3GpB-LCSAhx7JUZwo="
    }
    ,{
        tittle : "Android Development",
        image : "https://media.istockphoto.com/photos/hands-of-robot-and-human-touching-on-big-data-network-connection-and-picture-id1250153462?k=20&m=1250153462&s=612x612&w=0&h=0tN30xQ_NuZSTtfJ23TWpeaiLcVWVYuZMNhN7xm8vKI="
    },
    {
        tittle : "Marketing",
        image : "https://media.istockphoto.com/photos/close-up-ux-developer-and-ui-designer-use-augmented-reality-app-picture-id1302423375?k=20&m=1302423375&s=612x612&w=0&h=-8upzjJ0kK-aRuYsLY2DMafrDBUl24hXFAvJP7WV1Dc="
    }
  ] 

  
const Service = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                <h1 className="text-center m-2">Our Service</h1>
                    <div style={{display:"flex" , width:"80%", marginTop:"30px"}} className="col flex-wrap">
                    {servicedata.map((singlevale,i)=>{
                      return <Servicecard 
                      key={i}
                      tittle={singlevale.tittle}
                      image={singlevale.image}
                      />
                    })}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;