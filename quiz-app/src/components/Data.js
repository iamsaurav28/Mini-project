import{useState, useEffect, useRef } from "react";
import{flushSync} from "react-dom";

function Question({question,totalQuestion,currentQuestion, setAnswer}){
     const [SelectedOption, setSelectedOption] = useState(null);
     const timer = useRef(null)
     const progressBar = useRef(null);

     function gotoNextQuestion(){
          if(timer.current){
               clearTimeout(timer.current);
          }
          flushSync(()=>{
               setAnswer(SelectedOption);
          })
          setSelectedOption(null);
     }
     
     useEffect (()=>{
          progressBar.current.classList.remove("active");
          setTimeout(()=>{
               progressBar.current.classList.add("active");
          },0);
          timer.current = setTimeout(gotoNextQuestion, 10*1000); 
          return gotoNextQuestion;
     },[question]);

  return(
       <div className="question">
            <div className="progress-bar" ref={progressBar}></div>
            <div className="question-count"> 
                 <b>{currentQuestion }</b>
                 of
                 <b>{ totalQuestion}</b>
                 6
            </div>
            <div className="main">
                 <div className="title">
                      <span>Question:</span>
                      <p>{question.title}</p>
                 </div>
                 <div className="options">
                      {
                           question.options.map((option,index)=>{
                                return (
                                     <div
                                     className={index === SelectedOption ? "option active": "option"}
                                     key={index}
                                     onClick={()=> setSelectedOption(index)}
                                     >
                                          {option}
                                          </div>
                                );
                           })
                      }
                 </div>
            </div>
            <div className="control">
                 <button className="next" onClick={gotoNextQuestion}>Next</button>
            </div>
       </div>

  );
}
export default Question;