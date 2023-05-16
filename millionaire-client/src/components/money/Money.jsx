import "./Money.css";
import { money } from "../moneyData";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

const Money = () => {
  const { moneyCount, questionNumber } = useGlobalContext();

  return (
    <div className="money-container">
      <ul className="money-list">
        {money.map((moneyList) => {
          const { id, amount } = moneyList;
          return (
            <li
              className={
                questionNumber === id
                  ? "money-list-item active"
                  : "money-list-item"
              }
              key={id}
            >
              <span className="money-list-id">{id}</span>
              <span className="money-list-amount">{amount}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Money;
