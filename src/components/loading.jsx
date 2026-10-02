import css from "../style/loading.module.css";

export function Loading(){
  return (
    <div className={css.loader}>
      <div className={css.content}>
        <div className={css.logo}>
          PLAY<span>GROUND</span>
        </div>

        <div className={css.ballWrapper}>
          <div className={css.loaderRing}></div>
          <div className={css.ball}>
            <div className={css.ballSeam}></div>
          </div>
        </div>

        <h2>PREPARING YOUR PLAYGROUND</h2>

        <div className={css.loadingText}>
          <span>LOADING</span>
          <div className={css.dots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={css.bottomText}>
        TRACK <span>•</span> COMPETE <span>•</span> RISE
      </div>
    </div>
  )
}