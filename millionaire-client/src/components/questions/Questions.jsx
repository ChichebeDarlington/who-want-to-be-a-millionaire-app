import "./Questions.css";
// import { questionsAndAnswers } from '../questionsAndAnwersBank'
import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";
import questionsAndAnswers from "../questionsAndAnwersBank";
import { money } from "../moneyData";
import useSound from "use-sound";
import ring1 from "../../assets/ring1.mp3";

const Questions = () => {
  const {
    stop,
    setStop,
    questionNumber,
    setQuestionNumber,
    setEarned,
    earned,
  } = useGlobalContext();

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswser] = useState(null);
  const [className, setClassName] = useState("answer");
  const [ring] = useSound(ring1);

  useEffect(() => {
    ring();
  }, [ring]);

  useEffect(() => {
    setQuestion(questionsAndAnswers[questionNumber]);
  }, [questionsAndAnswers, questionNumber]);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(money.find((m) => m.id === questionNumber - 1).amount);
  }, [money, questionNumber]);

  const handleAnswer = (answer) => {
    setSelectedAnswser(answer);
    setClassName("answer active");
    timerDelay(
      () => setClassName(answer.correct ? "answer correct" : "answer wrong"),
      3000
    );
    timerDelay(() => {
      if (answer.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswser(null);
      } else {
        setStop(true);
      }
    }, 6000);
  };

  const timerDelay = (cb, duration) => {
    setTimeout(() => {
      cb();
    }, duration);
  };

  return (
    <div className="questionsanswers">
      <div className="question">{question?.question}</div>

      <div className="answers">
        {question?.answers?.map((ans, index) => {
          return (
            <li
              className={selectedAnswer === ans ? className : "answer"}
              key={index}
              onClick={() => handleAnswer(ans)}
            >
              {ans.text}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
