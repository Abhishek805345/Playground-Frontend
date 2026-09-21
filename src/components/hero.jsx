import css from "../style/hero.module.css";
import { Nav } from "./welcome";

export function Hero(){
  return (
    <>
    <Nav/>
     <section className={css.hero}>

      {/* Background */}
      <div className={css.heroBackground}></div>

      {/* Dark overlay */}
      <div className={css.overlay}></div>

      {/* Main content */}
      <div className={css.heroContent}>

        <p className={css.tagline}>
          TRACK <span>•</span> COMPETE <span>•</span> RISE
        </p>

        <h1 className={css.heading}>
          YOUR GAME
          <br />
          <span>OUR LEGACY</span>
        </h1>

        <p className={css.description}>
          Join a growing community of players, teams and fans.
          Track stats, explore events, and be part of something bigger.
        </p>

        <div className={css.buttons}>
          <button className={css.primaryBtn}>
            Explore Players <span>→</span>
          </button>

          <button className={css.secondaryBtn}>
            Explore Events
          </button>
        </div>

        <div className={css.stats}>

          <div>
            <strong>1,248</strong>
            <small>PLAYERS</small>
          </div>

          <div>
            <strong>86</strong>
            <small>EVENTS</small>
          </div>

          <div>
            <strong>32</strong>
            <small>TEAMS</small>
          </div>

          <div>
            <strong>24K</strong>
            <small>MATCHES</small>
          </div>

        </div>

      </div>


      {/* Batsman */}
      <img
        src="/batsman.png"
        alt="Cricket player"
        className={css.batsman}
      />


      {/* Right side */}
      <div className={css.sideText}>
        <span>PLAY</span>
        <span>COMPETE</span>
        <span>BELONG</span>
      </div>

    </section>
    </>
  )
}