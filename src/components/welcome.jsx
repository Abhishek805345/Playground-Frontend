import { Link } from "react-router-dom";
import css from "../style/welcome.module.css";
import { IoIosNotifications } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import Store, { statusAction } from "../utils/store.jsx";
import { useSelector } from "react-redux";
import { Notification } from "./notification.jsx";
import { FaRegUserCircle } from "react-icons/fa";

export function Nav() {
  const {status}=useSelector(store=>store.statusReducer);
  const {isAuthenticated}=useSelector(store=>store.userReducer);
  return (
    <>
    <nav className={css.nav}>
      <div>
        <Link to="/" className={css.logo}>
          Playground
        </Link>
      </div>
      <div className={css.centerdiv}>
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
              Store
            </Link>
          </div>
      </div>
      <div className={css.rightdiv}> 
          {isAuthenticated===true?
          <div>
            <Link to="" className={css.linkbut} onClick={()=>{
                  Store.dispatch(statusAction.StatusChanger({
                    newstatus:"Notification"
                  })
              )}}>
              <IoIosNotifications/>
            </Link>
            <span className={css.divider}><RxDividerVertical/></span>
          </div>:null  
        }
         {isAuthenticated===true?
          <FaRegUserCircle/>
         :
         <>
          <div>
            <Link to="/register" className={css.register}>
              Register
            </Link>
          </div>
          <div>
            <Link to="/login" className={css.login}>
              Login
            </Link>
          </div>
         </>
         }
      </div>
    </nav>
    {status==="Notification"?<Notification/>:null}
    </>
  );
}

export const sessionLoader = () => {
  return 0;
};
