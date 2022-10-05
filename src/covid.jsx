import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Covid = () => {
 const [latest,setlatest] = useState([])
    const getData = async () => {
        const data =  await fetch("https://data.covid19india.org/data.json")
        const res = await data.json()
        setlatest(res.statewise)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="main">
            <div className="">
                <h1 className="text-center pb-5 "style={{backgroundColor : "#bec2c1"}}>Covid 19 Latest Update</h1>
            </div>
            <div>
                <section className="intro">
                    <div className="bg-image h-100" style={{backgroundColor: "#f5f7fa"}}>
                        <div className="mask d-flex align-items-center h-100">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body p-0">
                                                <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{position:"relative", height: "700px"}}>
                                                    <table className="table table-striped mb-0">
                                                        <thead style={{backgroundColor: "#038a7c"}}>
                                                            <tr>
                                                                <th scope="col">State Name</th>
                                                                <th scope="col">Confirmed</th>
                                                                <th scope="col">Recovered</th>
                                                                <th scope="col">Death</th>
                                                                <th scope="col">Active</th>
                                                                <th scope="col">Update</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {latest.map((singleele,i)=>{
                                                                return(<tr key={i}>
                                                                    <td>{singleele.state}</td>
                                                                    <td>{singleele.confirmed}</td>
                                                                    <td>{singleele.recovered}</td>
                                                                    <td>{singleele.deaths}</td>
                                                                    <td>{singleele.active}</td>
                                                                    <td>{singleele.lastupdatedtime}</td>
                                                                </tr>)
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )

}

export default Covid