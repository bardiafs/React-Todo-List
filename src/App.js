
import React from 'react';
import { useState ,useEffect } from 'react';

import './styles.css';

function Button({text, type,onClick}){
  return (
    <button className={type} onClick={onClick}>{text}</button>
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

function AddForm({addInput, setAddInput,addTask}){
  return(
    <div class="division">
      <input type="text" value={addInput} placeholder="Add task..." 
        onChange={(e) => setAddInput(e.target.value)}/>
        <Button text="Add Task" type="brightButton" onClick={addTask}/>
    </div>
  )

}
function App(){
  const [filterText, setFilterText] = useState('');
  const [inProgressOnly, setInProgressOnly] = useState(false);
  const [addInput, setAddInput] = useState('');

  const [tasks, setTasks] = useState(() => {
    // Load tasks from local storage if available
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const addTask = () => {
    if (addInput.trim()) {
      setTasks([...tasks, { name: addInput, status: 'In Progress', isEditing: false }]);
      setAddInput('');
    }
  };
  return(
    <>
    <div id="app_island">
    <h1 id="app_title">TODO LIST</h1>
    <AddForm addInput={addInput} setAddInput={setAddInput} addTask={addTask}/>
    <SearchBar 
        filterText={filterText} 
        inProgressOnly={inProgressOnly} 
        onFilterTextChange={setFilterText} 
        onInProgressOnlyChange={setInProgressOnly} />
    <TaskList tasks={tasks}/>
    </div>
    </>
  );
};

export default App;
