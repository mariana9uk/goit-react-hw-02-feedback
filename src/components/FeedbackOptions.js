export const FeedbackOptions=({onLeaveFeedback})=>{
  
   return(
    <div>
    <button onClick={() => onLeaveFeedback("good")}>Good</button>
    <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
    <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
    </div>
   ) 
}