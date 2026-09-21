import { Link } from "react-router-dom"
import css from "../style/welcome.module.css";
export function Nav(){
  return (
    <nav className={css.nav}>
      <div>
        <Link to="" className={css.logo}>
          Playground
        </Link>
      </div>
      <div>
        <Link to="" className={css.linkbut}>
          Events
        </Link>
      </div>
      <div>
        <Link to="" className={css.linkbut}>
          Leader Board
        </Link>
      </div>
      <div>
        <Link to="" className={css.linkbut}>
          store
        </Link>
      </div>
      <div>
        <Link to="" className={css.linkbut}>
          Notification
        </Link>
      </div>
      <div>
        <Link to="" className={css.login}>
          Login
        </Link>
      </div>
    </nav>
  )
}

export const sessionLoader=()=>{
  return 0;
}