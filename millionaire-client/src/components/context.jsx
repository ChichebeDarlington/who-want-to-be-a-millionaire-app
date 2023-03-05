import React, { createContext, useReducer, useContext, useEffect, useState } from "react";
const UserContext = createContext();
import { reducer } from "./reducer";
import  questionsAndAnswers  from "./questionsAndAnwersBank";

// console.log(questionsAndAnswers);

const initialState = {
  questions:questionsAndAnswers,
  qNum: 0,
  timeout:false,
  allQuestion:null,
  selectedAnswer:null,
  classSelector:"",
  activeMoney: 0,
  moneyCount: 1,
  timeCount:0,
  checkAnswer: false
}

const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    dispatch({type:"INITIAL_QUESTION", payload:state.questions[state.qNum]})
  },[state.questionsAndAnswers, state.qNum])



  // const timerDelay = (cb,duration)=>{
  //   setTimeOut(()=>{
  //     cb()
  //   },duration)
  // }
  
  const handleAnswer = (answer)=>{
  dispatch({type:"SELECTED_ANSWER", payload:answer})
  // console.log(answer);
  dispatch({type:"CLASS_SELECTOR", payload:"answer active"})
  // console.log(answer);
  dispatch({type:"CHECK_ANSWER", payload:{answer, correct:"answer correct", wrong:"answer wrong"}})
  }
  
  
    return (
      <UserContext.Provider value={{...state, handleAnswer}}>
        {children}
      </UserContext.Provider>
    );
  };

  export const useGlobalContext = ()=>{
    return useContext(UserContext)
  }

  export default AppProvider