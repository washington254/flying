import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            SUBSCRIBE
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <h2 className="intro__scroll">“Fly, you fools!”...Gandalf </h2>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            CLICK ME NOW!!!! DO IT!!!!!!
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">that's a wrap.. tell me what you want next.. dizastaaaa🤣 ...</p>
      </div>
    </div>
  );
};
