import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
const UserContext = createContext();
import { reducer } from "./reducer";
import questionsAndAnswers from "./questionsAndAnwersBank";
import money from "./money/Money";
console.log(money);

const initialState = {
  questions: questionsAndAnswers,
  qNum: 0,
  timeout: false,
  allQuestion: null,
  selectedAnswer: "",
  classSelector: "",
  activeMoney: 0,
  moneyCount: 1,
  timeCount: 0,
  checkAnswer: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [username, setUsername] = useState(null);

  return (
    <UserContext.Provider
      value={{
        stop,
        setStop,
        earned,
        setEarned,
        questionNumber,
        setQuestionNumber,
        username,
        setUsername,
        ...state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};

export default AppProvider;
