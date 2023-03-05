export  const reducer = (state, action)=>{
switch (action.type) {
    case "INITIAL_QUESTION":
        return {...state, questions:action.payload}
        break;
    case "SELECTED_ANSWER":
        return {...state, selectedAnswer: action.payload}

        break;
    case "CLASS_SELECTOR":
        // console.log(action.payload)
        return {...state, classSelector: action.payload}
        break;
        case "CHECK_ANSWER":
            // console.log(action.payload)
            setTimeout(()=>{
                if(action.payload.answer.correct){
                console.log("correct")
                 return {...state, classSelector: action.payload.correct}
                } else{
                console.log("wrong")
                 return {...state, classSelector: action.payload.wrong}
                }
            },3000)
           
    default:
        return state
}
}