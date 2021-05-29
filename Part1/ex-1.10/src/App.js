import React, {useState} from 'react';

const Statistics = ({good ,bad,neutral ,total ,Average,positive}) => {
    if(total===0 )
    { return(
      <h3>There is no Feedback</h3>
    )
    }
    return (
        <div>
           <h4><Statastic value={good} text="good"/></h4>         
            <h4><Statastic value={neutral} text="neutral"/></h4>                   
            <h4><Statastic value={bad} text="bad"/></h4>
            <h4><Statastic value={total} text="total"/></h4>
            <h4><Statastic value={Average} text="Average"/></h4>
            <h4><Statastic value={positive+'%'} text="positive"/></h4>              
       </div>
    )
}

const Button = ({ClickOn,text}) => {
    return (
        <button onClick={ClickOn}>{text}</button>
    )
}
const Statastic = ({text , value}) => {
  return (
      <h4>{text} {value}</h4>
  )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const total=good+bad+neutral
    const Average=(good-bad)/total
    const positive=(good/total)*100
    return (
        <div>
            <h1>Hello Customers Please Give Your Feedback </h1>
                <Button ClickOn={()=> setGood(good+1)} text="Good" />
                <Button ClickOn={()=> setNeutral(neutral+1)} text="Neutral" />
                <Button ClickOn={()=> setBad(bad+1)} text="Bad" />           
            <h2>statistics</h2>
            <Statistics good={good} bad ={bad} neutral={neutral} total={total} Average={Average} positive={positive}/>
        </div>
    )
}



export default App