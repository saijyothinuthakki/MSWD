import React, {useState} from 'react';

const Statistics = ({good ,bad,neutral}) => {
    return (
        <div>
           <h4><Statistic value={good} text="good"/></h4>         
            <h4><Statistic value={neutral} text="neutral"/></h4>                   
            <h4><Statistic  value={bad} text="bad"/></h4>             
       </div>
    )
}

const Button = ({handleClick,text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    return (
        <div>
            <h1>Hello Customers Please Give Your Feedback </h1>
                <Button handleClick={()=> setGood(good+1)} text="Good" />
                <Button handleClick={()=> setNeutral(neutral+1)} text="Neutral" />
                <Button handleClick={()=> setBad(bad+1)} text="Bad" />           
            <h2>statistics</h2>
            <Statistics good={good} bad ={bad} neutral={neutral} />
        </div>
    )
}

const Statistic = ({text , value}) => {
  return (
      <h4>{text} {value}</h4>
  )
}

export default App