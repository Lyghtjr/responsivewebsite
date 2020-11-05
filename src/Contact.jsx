import React,{useState} from 'react';

const Service=()=>{
    const [data, setdata] = useState({
        fullname:'',
        phone:'',
        email:'',
    })
      InputEvent=(event)=>{
          const {name,value}=event.target;
          setdata((prevData)=>{
              return{
              ...prevData,
              [name]:value
          }})
      }

      const Formsubmit=(e)=>{
          e.preventDefault();
          alert(`I am ${data.fullname} here by declared that my phone number is ${data.phone} and email is ${data.email}`);
      }

    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
              <div ClassName="col-md-6 col-10 mx-auto">
              <form onSubmit={Formsubmit}>
              <div className="form-group">
    <label >FullName</label>
    <input onChange={InputEvent} value={data.fullname} name='fullname' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <br/>
              <div className="form-group">
    <label >Phone Number</label>
    <input onChange={InputEvent} value={data.phone} name='phone' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <br/>
  <div className="form-group">
    <label >Email address</label>
    <input autoComplete="off" onChange={InputEvent} value={data.email} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <br/>
  <div className="form-group">
    <textarea rows=' ' columns='' style={{width:"100%", height:"100px"}}/>
  </div>
   <br/>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
              </div>
            </div>
        </div>
    
    </>
    )
}
export default Service;