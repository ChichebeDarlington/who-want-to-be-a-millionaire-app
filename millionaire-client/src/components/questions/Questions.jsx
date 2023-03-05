import  './Questions.css'
// import { questionsAndAnswers } from '../questionsAndAnwersBank'
import { useGlobalContext } from '../context'
import { Fragment, useEffect } from 'react'


const Questions = () => {

const { questions, handleAnswer,selectedAnswer, classSelector} = useGlobalContext()

  return (
  <div className='questionsanswers'>  
  
    <div className="question">{questions?.question}</div>

<div className='answers'>
       {questions?.answers?.map((ans, index)=>{
        // console.log(ans);
     return <li className={selectedAnswer===ans ? classSelector :"answer"} key={index} onClick={()=>handleAnswer(ans)}>{ans.text}</li>
    })}
</div>
    </div>
  )
}

export default Questions