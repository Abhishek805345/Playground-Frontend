import { Form, Link } from "react-router-dom";
import css from "../style/register.module.css";
import { Nav } from "./welcome";
import { FaArrowRight } from "react-icons/fa";
import { registerapi } from "../../Services/authAPI's";
import Store, { statusAction } from "../utils/store";
import { useSelector } from "react-redux";
import { Loading } from "./loading";

export function Register(){
  const {errormsg,status}=useSelector(store=>store.statusReducer)
  return (
    <>
    {status==="Loading"?<Loading/>:
    <div>
          <Nav/>
        <div className={css.outerdiv}>
      <div className={css.leftsection}>
        <p className={css.heading}>Hey User Welcome</p>
        <p className={css.registerText}>
          Create your Playground account and get a personalized experience built
          around your game. Stay updated with notifications tailored to you,
          discover upcoming events, follow live scoreboards, track your progress,
          and stay connected with the Playground community.
        </p>
      </div>

      <div>
        <Form method="POST">
          {errormsg === "UserAlreadyExists" ? (
            <p style={{ color: "red", fontSize: "11px" }}>
              User with this email already exists. Try with Login
            </p>
          ) : null}

          <label>Full Name:</label>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />

          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            required
          />

          <label>Mobile Number</label>
          <input
            type="number"
            name="mobnumber"
            placeholder="90XXXXXXXX"
            minLength="10"
            maxLength="10"
            pattern="[0-9]{10}"
            required
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            minLength={8}
            required
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmpassword"
            minLength={8}
            required
          />

          {errormsg === "FillPasswordSame" ? (
            <p style={{ color: "red", fontSize: "11px" }}>
              Both the passwords should be same
            </p>
          ) : null}

          <select name="state" required>
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          <select name="position" required>
            <option value="player">Player</option>
            <option value="coach">Coach</option>
          </select>
          <label>Agree:</label>
          <input type="radio" name="aggrement" />

          <button type="submit">
            <FaArrowRight />
          </button>
        </Form>
        <Link to="/login">Login</Link>
      </div>
    </div>
    </div>
    }
    
    </>
  )
}


export const RegisterAction=async ({request})=>{
  Store.dispatch(statusAction.StatusChanger({             //enabling the loading screen
    newstatus:"Loading"   
  }))
  const formdata=await request.formData();
  const data=Object.fromEntries(formdata);
  console.log(data);
  if (data.password===data.confirmpassword){
    const result=await registerapi(data);
    if (result.status===true){
      return Response.redirect('/login');               //disable the loading screen after successful login in /login loader
    }else if (result.status===false){
      Store.dispatch(statusAction.ErrorChanger({
        newerrormsg:"UserAlreadyExists"
      }))
      Store.dispatch(statusAction.StatusChanger({
        newstatus:"Hero"
      }))
    }
  }else{
    Store.dispatch(statusAction.ErrorChanger({
      newerrormsg:"FillPasswordSame"
    }))
    Store.dispatch(statusAction.StatusChanger({
      newstatus:"Hero"
    }))
  }
  
}