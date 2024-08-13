import { useState,useCallback } from "react";
import QUESTIONS from '../questions.js'; 

import Question from './Question.jsx';
import Summary from "./Summary.jsx";


export default function Quiz(){
    
    const [userAnswers,setUserAnswers]=useState([]);
    
    const activeQuestionIdx= userAnswers.length;
    
    const quizIsComplete=activeQuestionIdx===QUESTIONS.length;

    const handleSelectAnswer=useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevAnswers)=>{
            return [...prevAnswers,selectedAnswer];
        });
       
    },[]);

    const handleSkipAnswer=useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]);

    if(quizIsComplete){
        return(
            <Summary userAnswers={userAnswers}/>
        )
    }
    


    return (
        <div id="quiz">
            <Question 
            key={activeQuestionIdx}
            idx={activeQuestionIdx}
            onSelectAnswer={handleSelectAnswer} 
            onSkipAnswer={handleSkipAnswer}
            />
        </div>
        
        
    ); 
}