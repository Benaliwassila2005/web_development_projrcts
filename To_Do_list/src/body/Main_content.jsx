import React, { useState,useEffect } from 'react'
import { FiPlus } from "react-icons/fi";
import { GrNext,GrPrevious } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import { MdOutlineSportsHandball } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOtherHouses } from "react-icons/md";
import { IoTrash } from "react-icons/io5";
import './main_content.css'



function Main_content() {
  


  const [date,setNewDate] = useState(new Date());
  const  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'];


  //get the first day of the month
  let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);    
  let weekDayOfFirstDay = firstDayOfMonth.getDay();
  let lastDayOfMonth = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
  const today = new Date();
  

  // console.log(lastDayOfMonth);
  // console.log(firstDayOfMonth);

  let currentDays = [];
  //fill with empty cells
  function fill_days(weekDayOfFirstDay){
    for(let i= 0; i < weekDayOfFirstDay ; i++)
    {
       currentDays.push({ day: null, belongsToMonth: false });
    }
      
  }
  //fill with real days
  function Real_Days_Fill(lastDayOfMonth){
    for(let day = 1 ; day<=lastDayOfMonth ;day++){
        currentDays.push({ day: day, belongsToMonth: true });
    }
  }

  // previous Month
  function previousMonth(){

      setNewDate(new Date(date.getFullYear(),date.getMonth()-1,1));
  }
  

   // Next Month

  function nextMonth(){

      setNewDate(new Date(date.getFullYear(),date.getMonth()+1,1));
   }




   fill_days(weekDayOfFirstDay);
   Real_Days_Fill(lastDayOfMonth);
  
   //progress Bar 

   const categories = ["study","work","health","shopping","other"];
   //progress bar varibales 

   const [filled,setFilled] = useState({

      study :0,
      work:0,
      health:0,
      shopping:0,
   
    });

       const [tasks, setTasks] = useState(() => {
       const savedTasks = localStorage.getItem("tasks");
           return savedTasks ? JSON.parse(savedTasks) : [];
            });
       

      const [newTask,setNewTasks] = useState("");
      const [selectedCategory,setSelectedCategory] = useState("");

    function Update_State_Category(){

      setFilled(prev => ({...prev, [selectedCategory]: prev[selectedCategory] + 1}));

    }

   function getCategoryCount(category) {
  return tasks.filter(task => task.category === category).length;
}


function getProgress(category) {
  const count = getCategoryCount(category);
  const max = 10;

  return (count / max) * 100;
}



    function handleInputChange(event){
      setNewTasks(event.target.value);

      console.log(event.target.value);
      


    }

     useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
                     }, [tasks]);

 function addTask() {

  if (newTask.trim() === "" || selectedCategory === "") {
    return;
  }

  const task = {
    text: newTask,
    category: selectedCategory,
    completed: false,
  };

  // Use the previous state
  setTasks((prevTasks) => [...prevTasks, task]);

  setNewTasks("");
  setSelectedCategory("");
}



     function deleteTask(index) {
  setTasks(prevTasks =>
    prevTasks.filter((_, i) => i !== index)
  );
}


     function icon_select(selectedCategory){

      if (selectedCategory === "study"){
        
             return <FaBook />
      }

      else if(selectedCategory === "health"){
        return <MdOutlineSportsHandball />
      }
       
      
      else if(selectedCategory === "work"){
       
        return <MdOutlineWorkOutline />
      }

      else if(selectedCategory === "other"){
       
        return <MdOtherHouses />
      }
       
         
     else
        return null;
       

     }


     //checkBox toogleTask Function 

   function toggleTask(index) {
  setTasks(prev =>
    prev.map((task, i) =>
      i === index
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}  

   



  
  return (
    <>
    

        <div className="main_container">
        <div className="left_main_container">
           <div className="input_button_container">
           
             <input type="text" placeholder='Add new Task...'
              value={newTask}
              onChange={handleInputChange}

             />


             <div className="category_list">
               <select  value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}>
            
                <option value="" defaultValue="">select</option>
                
                {
                  categories.map((category,index) =>
                  (
                    <option value={category} key={index}>{category}

                    </option>
                  ))}
               



               </select>

             </div>

              <button id='add_task' onClick={addTask}> <FiPlus /> Add Task</button>
           </div>
                <div className="filter_tasks">
            <div className="task_types selected">
                <h2><a href="#">All</a></h2>
            </div>
             <div className="task_types">
                <h2><a href="#">completed</a></h2>
            </div>
              <div className="task_types">
                <h2><a href="#">Important</a></h2>
            </div>
             <div className="task_types">
                <h2><a href="#">priority</a></h2>
            </div>
                
        </div>
     
     <div className="tasks_container">

  {tasks.map((task, index) => (
    <div className="task" key={index}>

      <div className="task_div_right">
        
        <input
         type="checkbox"
         className="checkbox"
         checked={task.completed}
         onChange={() => toggleTask(index)}
        />
        
        <span className="icon_category">{icon_select(task.category)}</span>

        <h2 className={task.completed ? "done" : ""}>
          {task.text}
       </h2>


      </div>

      <div className="task_div_left">
        <span className="category_selected">
          {task.category}
        </span>

        <span className="icon_favorite"></span>
        <button className="icon_trash" onClick={() => deleteTask(index)}><IoTrash /></button>
      
      </div>

    </div>
  ))}

</div>
        </div>

        <div className="right_main_container">
          <div className="calendar">
            <div className="calendar_header">
              <button id="previous_btn" className='btn'  onClick={previousMonth}><GrPrevious /></button>
              <h2>{months[date.getMonth()]} {date.getFullYear()}</h2>
              <button id="next_btn"  className='btn' onClick={nextMonth} ><GrNext /></button>
               

            </div>
              <div className="calendar_body">
                 <div className="table_header">
                    {weekdays.map((weekday)=>{
                      return <div className="weekday">
                        <p>{weekday}</p>
                      </div>
                    })}
                 </div>
                   <div className="calendar_body">
                        <div className="body_content">
                     {
                    currentDays.map((item,index)=>
                     { 
                       return (
                             

                          <div className={item.day === today.getDate() && date.getMonth() === today.getMonth() && today.getFullYear() === date.getFullYear()? 'today' : item.belongsToMonth ? 'day' : 'empty_day'}>
                             
                              {item.day}
                             
                          </div>
                       )
                      }
                    
                    )
                  }
                   </div>
                  </div>
              </div>
          </div>
<div className="progress_Bar">

  <div className="bar_header">
    <h2>Categories</h2>
    <p><a href="#">Edit</a></p>
  </div>

  <div className="progress_Bar_container">

    {categories.map((category) => (

      <div className="upper_Bar" key={category}>

        <div className="category_bar">
          <span>{icon_select(category)}</span>
          <h3>{category}</h3>
        </div>

        <h3>
          <span>{tasks.filter(t => t.category === category).length}</span> tasks
        </h3>

        <div className="progress_line">
          <div className="track">
            <div
              className="fill"
              style={{ width: `${getProgress(category)}%` }}
            ></div>
          </div>
        </div>

      </div>

    ))}

  </div>

</div>
       
       
          <div className="quote_div">

          </div>
        
        </div>


    </div>
    </>
    
    
  )
}

export default Main_content