
import React from 'react';
import './styles.css';

function Button({text, type}){
  return (
    <button className={type}>{text}</button>
  )
}

function TaskList({tasks}){
  return(
    <>
    <h2>Tasks</h2>
    <div className="list">
      {tasks.map((task, index) => (
        <div className="division" key={index}>
          {task.isEditing ? (
              <>
                <input type="text" defaultValue={task.name} placeholder="Edit task" />
                <Button text="Apply" type="brightButton"/>
              </>
            ) : (
              <>
                <span>{task.name}</span>
                <Button text="Delete" type="darkButton"/>
                <Button text="Edit" type="darkButton"/>
                <input type="checkbox" checked={task.status === 'Done'} />
              </>
            )}
          </div>
        ))}
    </div>

    
    </>
  )
}


function App(){
  const taskss= [
    { name: 'Task 1', status: 'In Progress', isEditing: false },
    { name: 'Task 2', status: 'Done', isEditing: false },
    { name: 'Task 3', status: 'In Progress', isEditing: true },
  ];
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
    <TaskList tasks={taskss}/>
    </>
  );
};

export default App;
