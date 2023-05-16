import Questions from "../questions/Questions";
import Timer from "../Timer";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="top">
        <div className="timer">
          <Timer />
        </div>
      </div>
      <hr />
      <div className="bottom">
        <Questions />
      </div>
    </div>
  );
};

export default Main;
