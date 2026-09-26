import css from "../style/footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className={css.footer}>

      <div className={css.footerMain}>

        {/* Brand */}
        <div className={css.brand}>
          <h2>PLAYGROUND</h2>

          <p>
            Track. Compete. Rise.
          </p>

          <span>
            Where the game meets the next generation.
          </span>
        </div>


        {/* Navigation */}
        <div className={css.footerLinks}>

          <div>
            <h3>Explore</h3>

            <a href="/">Home</a>
            <a href="/events">Events</a>
            <a href="/leaderboard">Leaderboard</a>
            <a href="/store">Store</a>
          </div>


          <div>
            <h3>Community</h3>

            <a href="/players">Players</a>
            <a href="/teams">Teams</a>
            <a href="/register">Join Playground</a>
            <a href="/login">Login</a>
          </div>

        </div>


        {/* Social */}
        <div className={css.social}>

          <h3>Connect</h3>

          <p>
            Follow the journey.
          </p>

          <div className={css.socialIcons}>

            <a
              href="https://github.com/Abhishek805345"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-00a4b528b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className={css.footerBottom}>

        <span>
          © 2026 Playground. All rights reserved.
        </span>

        <span>
          Built for the game.
        </span>

      </div>

    </footer>
  );
}