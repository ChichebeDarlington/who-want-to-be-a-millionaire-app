export const reducer = (state, action) => {
  switch (action.type) {
    // case "INITIAL_QUESTION":
    //   return { ...state, questions: action.payload };

    // case "SELECTED_ANSWER":
    //   return { ...state, selectedAnswer: action.payload };

    // case "CLASS_SELECTOR":
    //   // console.log(action.payload)
    //   return { ...state, classSelector: action.payload };

    // case "CHECK_ANSWER":
    //   if (action.payload.correct) {
    //     return {
    //       ...state,
    //       qNum: +1,
    //       classSelector: "answer correct",
    //     };
    //   } else {
    //     return { ...state, classSelector: "answer wrong" };
    //   }

    default:
      return state;
  }
};
