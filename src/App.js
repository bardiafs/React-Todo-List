
import React from 'react';
import './styles.css';

function Button({text, type}){
  return (
    <button className={type}>{text}</button>
  )
}

function App(){
  return(
    <>
    <h1>TODO LIST</h1>
    <div class="division">
      <Button text="Search" type="darkButton"/>
      <Button text="New Task" type="brightButton"/>
    </div>
    <div class="division">
      <input type="text" placeholder="Search for tasks..." />
      <Button text="Go" type="brightButton"/>
    </div>
    <div class="division">
      <span>Filters:   </span>
      <Button text="Done" type="darkButton"/>
      <Button text="in Progress" type="darkButton"/>
      <Button text="All" type="darkButton"/>
    </div>
    </>
  );
};

export default App;
