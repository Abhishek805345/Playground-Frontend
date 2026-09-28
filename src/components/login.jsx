import { Form, Link } from "react-router-dom";
import { Nav } from "./welcome";
import { FaArrowRight } from "react-icons/fa";
import css from "../style/login.module.css";

export function Login(){
  return (
    <>
    <Nav/>
    <div className={css.outerdiv}>
      <div className={css.formdiv}>
          <Form method="POST">
            <label>Email:</label>
            <input type="email" name="email" placeholder="example@gmail.com" required></input>
            <label>Password:</label>
            <input type="password" name="password" minLength="8" required></input>
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