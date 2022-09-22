import React from "react";
import { useState } from "react";
import "./registration.css";

function RegistrationPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [gender, setGender] = useState(false);
  const[data,setData]=useState([])

  // function handleSubmit(e){
  //   e.preventDefault()
  //   alert(`you typed ${name} ${email} ${mobile}`)
  //   console.log(name,email,mobile)
  // }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            "Accept":"application/json"
        },
        body: JSON.stringify({
         email:email,password:password
        //   mobile: mobile,
        //   gender: gender,
        }),
      });
      let resJson = await res.json();
      setData(resJson)
      console.log(data)
      console.log(res)
      
     
      if (res.status === 200) {
        console.log("User created sucessfully");
      } else {
        console.log("User not created there is some issue");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formStyle = {
    padding: "25px",
  };
  return (
    <div className="back">
      <div className="outer">
        <div className="formdata">
          <form onSubmit={handleSubmit} style={formStyle}>
            <h4 style={{ textAlign: "center" }}>Registration Form</h4>
            <div className="row" style={{ marginTop: "15px" }}>
              
              <div className="col-md-6">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enetr your Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
              </div>
              <div className="col-md-6">
                <label htmlFor="pass">Password:</label>
                <input
                  type="password"
                  id="pass"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
              </div>
            </div>

            {/* <div className="row" style={{ marginTop: "15px" }}>
              <div className="col-md-6">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="text"
                  id="mobile"
                  placeholder="Enter your Contact No."
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <br />
              </div>
              <div className="col-md-6">
                
                <label htmlFor="gender">Gender:</label>
                <select id="gender" value={gender} onChange={(e)=>setGender(e.target.value)} style={{width: "180px", height:"35px"}}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                </select>
            
                </div>
          
            </div> */}

            <div style={{ textAlign: "center", marginTop: "35px" }}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
