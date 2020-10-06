import React from 'react';
import './App.css';
import Questions from './components/Questions.js'
const App = () => {
    return ( 
    <div>
        <h1>Frequently Asked Questions</h1>
        <br/>
        <div className="FAQ">
       <Questions Q1="What is Netflix?"/>
       </div>
       <div className="FAQ"> 
       <Questions Q2="How much does Netflix cost?"/>
       </div>
       <div className="FAQ">
       <Questions Q3="Where can i watch?"/>
       </div>
       <div className="FAQ">
       <Questions Q4="How do i cancel?"/>
       </div>
       <div className="FAQ">
       <Questions Q5="What can i watch on Netflix?"/>
       </div>
       <div className="FAQ">
       <Questions Q6="How does the free trial work?"/>
       </div>
       <br/>
       <br/>
       <div className="Free"> 
       <p>TRY 30 DAYS FREE </p>
       </div>
    </div>
    )
}

export default App;
