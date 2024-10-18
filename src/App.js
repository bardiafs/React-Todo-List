
import React from 'react';
import { useState } from 'react';

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

function SearchBar({
  filterText,
  inProgressOnly,
  onFilterTextChange,
  onInProgressOnlyChange
}) {
  return (
    <div className='division'>
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
        <br></br>
      <label>
        <input 
          type="checkbox" 
          checked={inProgressOnly} 
          onChange={(e) => onInProgressOnlyChange(e.target.checked)} />
        {' '}
        Only show tasks in Progress
      </label>
    </form>
    </div>
  );
}

function AddForm(){
  const [addInput, setAddInput] = useState('');
  return(
    <div class="division">
      <input type="text" value={addInput} placeholder="Add task..." 
        onChange={(e) => setAddInput(e.target.value)}/>
      <Button text="Add Task" type="brightButton"/>
    </div>
  )

}
function App(){
  const [filterText, setFilterText] = useState('');
  const [inProgressOnly, setInProgressOnly] = useState(false);

  const taskss= [
    { name: 'Task 1', status: 'In Progress', isEditing: false },
    { name: 'Task 2', status: 'Done', isEditing: false },
    { name: 'Task 3', status: 'In Progress', isEditing: true },
  ];
  return(
    <>
    <div id="app_island">
    <h1 id="app_title">TODO LIST</h1>
    <AddForm/>
    <SearchBar 
        filterText={filterText} 
        inProgressOnly={inProgressOnly} 
        onFilterTextChange={setFilterText} 
        onInProgressOnlyChange={setInProgressOnly} />
    <TaskList tasks={taskss}/>
    </div>
    </>
  );
};

export default App;
