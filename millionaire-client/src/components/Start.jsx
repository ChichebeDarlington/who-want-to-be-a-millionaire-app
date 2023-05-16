import { useRef } from "react";
import { useGlobalContext } from "./context";

const Start = () => {
  const { setUsername, username } = useGlobalContext();

  const inputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div className="start">
      <form>
        <input
          type="text"
          ref={inputRef}
          placeholder="Please enter your username"
        />
        <button type="submit" onClick={handleClick}>
          Start
        </button>
      </form>
    </div>
  );
};

export default Start;
