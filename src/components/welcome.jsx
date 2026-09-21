import { Link } from "react-router-dom"

export function Nav(){
  return (
    <nav>
      <div>
        <Link to="">
          Home
        </Link>
      </div>
      <div>
        <Link to="">
          Events
        </Link>
      </div>
      <div>
        <Link to="">
          Leader Board
        </Link>
      </div>
      <div>
        <Link to="">
          store
        </Link>
      </div>
      <div>
        <Link to="">
          Login
        </Link>
      </div>
    </nav>
  )
}

export const sessionLoader=()=>{
  return 0;
}