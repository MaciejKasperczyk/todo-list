import {useState} from 'react';
import './App.css';
import FadeIn from 'react-fade-in';


function App() {

    const [task, setTask] = useState("Write something to do!")
    const [taskList, setTaskList] = useState([])

    const handleChange = (e) => { setTask(e.target.value) }
    const AddTask = () => {
        if ( task !== '') {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: 'false',
            };
            setTaskList([...taskList, taskDetails]);
            console.log(taskList);

        }
    }
    const DeleteTask = (id) =>
    {
       setTaskList(taskList.filter((t) => t.id !== id));
       
        
    }
    const endTask = (e, id) => {
        e.preventDefault();

        const element = taskList.findIndex((elem) => elem.id === id);


        const newTaskList = [...taskList];

        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: 'true',
        }

        setTaskList(newTaskList);
       
    };
    function xd(lel)
    {
        if (lel === "true") { completedTask = "completed" }
        else completedTask = "";
    }
    let completedTask = "";
    return (
       
        <div className="container">




        
          <div className="app-container">
              <div className="app-addTask">
              <input type="text" value={task} onChange={handleChange} className="app-input"  />
                  <div className="app-button" onClick={AddTask}> Add task! </div>    
                  </div>
          <ul>
                    {taskList.map((t) => (
                        <FadeIn>
                      <div className="task"> {xd(t.isCompleted)}
                          <li className={completedTask}>{t.value} 
                          </li>
                          <div className="taskButton -delete" onClick={(e) => DeleteTask(t.id)}>  </div>
                          <div className="taskButton -done" onClick={(e) => endTask(e, t.id)}>  </div>
                           
                            </div>
                        </FadeIn>
                  
              )
              
                  
              )}
              </ul>
              </div>
            </div>
       
  );
}

export default App;
