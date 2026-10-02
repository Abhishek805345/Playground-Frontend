import { Form, Link } from "react-router-dom";
import { Nav } from "./welcome";
import { FaArrowRight } from "react-icons/fa";
import css from "../style/login.module.css";
import { loginAPI } from "../../Services/authAPI's";
import Store, { statusAction, userAction } from "../utils/store";
import { useSelector } from "react-redux";

export function Login(){
  const {errormsg}=useSelector(store=>store.statusReducer);
  return (
    <>
    <Nav/>
    <div className={css.outerdiv}>
      <div className={css.formdiv}>
          <Form method="POST">
            {errormsg==="NoUserFound"?<p style={{"color":"red","fontSize":"11px"}}>No Registered User found with this email</p>:null}
            <label>Email:</label>
            <input type="email" name="email" placeholder="example@gmail.com" required></input>
            <label>Password:</label>
            <input type="password" name="password" minLength="8" required></input>
            {errormsg==="wrongPasswordOrPosition"?<p style={{"color":"red","fontSize":"11px"}}>Either your password is wrong or your position selection.</p>:null}
            <label>Login As a:</label>
            <select name="position" required>
              <option value="player">Player</option>
              <option value="coach">Coach</option>
            </select>
            <button type="submit"><FaArrowRight/></button>
          </Form>
           <div className={css.formlinks}>
            <Link to="/forgot-password" className={css.linkbut}>Forgot Password?</Link>
            <Link to="/register" className={css.linkbut}>Create Account</Link>
          </div>
      </div>
       <div className={css.textdiv}>
          <span>WELCOME BACK</span>
          <p>Welcome back, User.</p>
          <h2>Continue your<br />Playground journey.</h2>
          <p className={css.description}>
            Sign in to stay connected with your game. Get personalized
            notifications, discover upcoming events, follow scoreboards,
            track your progress, and stay connected with the Playground
            community.
          </p>
        </div>
    </div>
    </>
  )
}



export const loginLoader=()=>{
  Store.dispatch(statusAction.StatusChanger({
    newstatus:"Hero"
  }))
}


export const loginAction=async ({request})=>{
  Store.dispatch(statusAction.StatusChanger({       //enabling the loading screen
    newstatus:"Loading"
  }))
  const formdata=await request.formData();
  const data=Object.fromEntries(formdata);
  const result=await loginAPI(data);
  console.log(result);
  if (result.status===true){
    Store.dispatch(userAction.isAuthenticatedChanger());
    Store.dispatch(userAction.idChanger({
      new_id:result.userdetails._id
    }))
    Store.dispatch(userAction.emailChanger({
      newemail:result.userdetails.email
    }))
    Store.dispatch(userAction.fullnameChanger({
      newfullname:result.userdetails.fullname
    }))
   return Response.redirect("/");
  }else if (result.status===false){
    Store.dispatch(statusAction.ErrorChanger({
      newerrormsg:"NoUserFound"
    }))
    Store.dispatch(statusAction.StatusChanger({
        newstatus:"Hero"
      }))
  }else if (result.status==="wrongPasswordOrPosition"){
    Store.dispatch(statusAction.ErrorChanger({
      newerrormsg:"wrongPasswordOrPosition"
    }))
    Store.dispatch(statusAction.StatusChanger({
        newstatus:"Hero"
      }))
  }
}