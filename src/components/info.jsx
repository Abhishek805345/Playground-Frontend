import { Link } from "react-router-dom";
import css from "../style/info.module.css";

export function Info(){
  return (
    <div className={css.outerdiv}>
      <div className={css.innerdiv}>
        <h2>About</h2>
        <p>Playground is India's first televised cricket-based reality show, followed by an international league, that discovers raw talent from India's heartlands, offering equal opportunities to all, regardless of caste, class, or background. More than a game, Playground blends cricket with culture, nurturing talent through yoga, meditation, and Indian values — uniting Bharat through its roots and proving that we are our own destiny-makers!</p>
      </div>
      <div className={css.innerdiv}>
        <h2>Out Trails</h2>
        <p>Discover a variety of exciting trails perfect for all levels, from beginners to seasoned runners. Explore scenic routes and challenge yourself in new environments.</p>
      </div>
      <div className={css.innerdiv}>
        <h2>Join Our Community</h2>
        <p>Become a part of Playground family! Register or log in to track your progress, participate in events, and connect with other enthusiasts.</p>
        <Link to="">Register</Link>
      </div>
      <div className={css.innerdiv}>
        <h2>Match Day Highlights</h2>
        
      </div>
    </div>
  )
}