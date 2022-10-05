import React, { useState } from "react";
import Listkeep from "./listkeep";

const Addkeep = () => {

    const [write, setwrite] = useState(false)
    const [task, settask] = useState({
        tittle: "",
        note: "",
    })
    const [listtask, setlisttask] = useState([])

    const change = (e) => {
        const value = e.target.value
        const name = e.target.name
        settask((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const click = () => {
        if(task.tittle === "" && task.note === ""){
           alert("Please Enter Some Task")
        }else{
        setlisttask((prev) => {
            return [...prev, task]
        })
        settask({
            tittle: "",
            note: ""
        })
    }
    }
    const deleteitem = (id) => {
        const updatelist = listtask.filter((ele, i) => {
            return i !== id
        })
        setlisttask(updatelist)
    }
    return (
        <>
        
            <div  className="rounded mx-auto w-25 h-auto shadow-lg">
                <div >
                    {write && <input value={task.tittle} name="tittle" className="form-control border-0" onChange={change} placeholder={write ? "Tittle" : "Write a note"} type="text" />}
                </div>
                <div className="h-100">
                    <textarea value={task.note} name="note" className="form-control border-0" placeholder="Write a note" onChange={change} onClick={() => setwrite(true)} onDoubleClick={()=> setwrite(false)} ></textarea>
                </div>
                <div className="text-center ms-5">
                    
                    <button onClick={click} className="ms-5 btn btn-light border-light rounded-circle">➕</button>
                </div>
            </div>
            <div className="d-inline-flex" style={{flexWrap : "wrap" , marginLeft :"95px"}}>
                {listtask.map((singleobj, index) => {
                    return (
                        <Listkeep
                            key={index}
                            tittle={singleobj.tittle}
                            note={singleobj.note}
                            func={() => deleteitem(index)}
                        />
                    )
                })}</div>
        </>
    )

}
export default Addkeep