import React, { useState } from "react";

const Contact = ()=>{
    const [userval,setuserval] = useState({
        fname:"",
        pno:"",
        email:"",
        msg:""
    })
    const newVal = (e)=>{
       const value = e.target.value;
       const name = e.target.name
       setuserval((preval)=>{
         return{ ...preval,
          [name]:value}
       })
    }
    const formsubmit = (e)=>{
      e.preventDefault()
      alert(`My name is ${userval.fname} and phone no is ${userval.pno} and email address is ${userval.email} and my message is ${userval.msg}`)
      setuserval({
        fname:"",
        pno:"",
        email:"",
        msg:""
      })
    }
     return(<div>
        <section className="h-50" style={{backgroundColor: "#8fc4b7"}}>
  <div className="container py-3 h-50">
    <div className="row d-flex justify-content-center align-items-center h-50">
      <div className="col-lg-6 col-xl-4">
        <div className="card rounded-3">
          <div className="card-body p-2 p-md-3">
            <h3 className="mb-2 pb-1 pb-md-0 mb-md-3 px-md-1">Contact Us</h3>
            <form onSubmit={formsubmit} className="px-md-1">
              <div className="form-outline mb-1">
                <input value={userval.fname} name="fname" onChange={newVal} type="text" id="form3Example1q" className="form-control" />
                <label className="form-label" for="form3Example1q">Full Name</label>
              </div>
              <div className="form-outline mb-2">
                <input value={userval.pno} name="pno" onChange={newVal} type="text" id="form3Example1q" className="form-control" />
                <label className="form-label" for="form3Example1q">Phone No</label>
              </div>
              <div className="form-outline mb-2">
                <input value={userval.email} name="email" onChange={newVal} type="text" id="form3Example1q" className="form-control" />
                <label className="form-label" for="form3Example1q">Email Adress</label>
              </div>
              <div className="form-outline mb-2">
                <textarea value={userval.msg} name="msg" onChange={newVal} type="text" id="form3Example1q" className="form-control" />
                <label className="form-label" for="form3Example1q">Message</label>
              </div>
              <button type="submit" className="btn btn-success btn-lg mb-0">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>

    )
}

export default Contact;