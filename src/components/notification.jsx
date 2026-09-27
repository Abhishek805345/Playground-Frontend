import { Link } from "react-router-dom";
import css from "../style/notification.module.css";
import { IoMdClose } from "react-icons/io";
import Store, { statusAction } from "../utils/store";

export function Notification(){
  let noti=[
    {
      id:1,
      name:"Trails on 9-sept-2026"
    },
    {
      id:2,
      name:"game on 11-sept-2026"
    },
    {
      id:3,
      name:"final on 13-sept-2026"
    }
  ]
  return (
    <div className={css.outerdiv}>
      <header className={css.header}>
        <p>Notifications</p>
          <Link onClick={()=>{
                Store.dispatch(statusAction.StatusChanger({
                  newstatus:"Hero"
                }))
              }}>
            <IoMdClose/>
          </Link>
      </header>
      <div>
        <ul className={css.noties}>
          {noti.map(obj=><li key={obj.id}>{obj.name}</li>)}
        </ul>
      </div>

    </div>
  )
}