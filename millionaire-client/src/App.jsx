import Main from "./components/main/Main";
import Money from "./components/money/Money";
import { useGlobalContext } from "./components/context";

import "./App.css";
import Start from "./components/Start";

function App() {
  const { stop, setStop, earned, setEarned, username } = useGlobalContext();

  return (
    <>
      {username ? (
        <div className="App">
          {stop ? (
            <h1 className="earned">You earned: {earned}</h1>
          ) : (
            <>
              <Main />
              <Money />
            </>
          )}
        </div>
      ) : (
        <Start />
      )}
    </>
  );
}

export default App;
