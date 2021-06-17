//Selectors

let input = document.querySelector('#task');
let form = document.querySelector('#task-form');
let addTaskBtn = document.querySelector('#add-task');
let clearTask = document.querySelector('.clear-tasks');
let deleteTask = document.querySelector('.collection');
//Total Task

// console.log(clearTask);


loadEventListenerALL = ()=>{
  addTaskBtn.addEventListener('click',addTask);

  //reload the values form localStorage
  document.addEventListener('DOMContentLoaded', reloadContent);

  //remove
  deleteTask.addEventListener('click',removeItem);


  //remove all the tasks
  clearTask.addEventListener('click', removeAllTask);
}





//functions

//AddTaskLIst to the UI
addTask = (e)=>{
    console.log(input.value);
    if(input.value==="")
    {
      alert("Please Enter Your Task");
    }
    else{
      
    showTask(input.value);
    storeTask();
    input.value="";
    }
    e.preventDefault();
}

//Show the task to UI
showTask = (task)=>{
  let perent = document.querySelector('.collection');


  let li = document.createElement('li');
  li.className = 'collection-item';
  li.append(document.createTextNode(task));
  // console.log(li.textContent);
  let link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.setAttribute('href','#');


  let icon = document.createElement('i');
  icon.className = 'fa fa-remove';
  icon.style.cursor = 'pointer';

  //append all the child to their respective perent
  link.appendChild(icon);

  li.appendChild(link);

  perent.appendChild(li);

}
//remove Items

removeItem = (e)=>{
  // console.log(e.target.classList);
  if(e.target.classList[0] =="fa")
  {
    if(confirm("Are you sure?")){
      
    e.target.parentElement.parentElement.remove();
    removeFromLS(e.target.parentElement.parentElement);
    
    }

    //remove from LS

    
  }
}
//remove form localstorage
removeFromLS = (removeTask)=>{
  let Tasks;

    if(localStorage.getItem('task')===null)
    {
      Tasks=[];
    }
    else
    {
      Tasks = JSON.parse(localStorage.getItem('task'));
    }
    // console.log(Tasks);
    Tasks.forEach( (task,index)=>{
      if(removeTask.textContent === task){
        Tasks.splice(index,1);
      }
    })
    // console.log(Tasks);
    localStorage.setItem('task', JSON.stringify(Tasks));
}

//remove all the Tasks
removeAllTask = ()=>{
  if(localStorage.getItem('task')===null)
  {
    alert("No Task To delete");
  }
  else
  {
    if(confirm("Are You Sure?"))
    {
      localStorage.clear();
    }
}
  
  
}




//Store the Task to the Local storage of the browser

storeTask = ()=>{

  let Tasks;

  if(localStorage.getItem('task')===null)
  {
    Tasks = [];
  }
  else
  {
    Tasks = JSON.parse(localStorage.getItem('task'));
  }

  Tasks.push(input.value);

  localStorage.setItem('task',JSON.stringify(Tasks));

}

//Reload the content

reloadContent = ()=>{

    let Tasks;

    if(localStorage.getItem('task')===null)
    {
      Tasks=[];
    }
    else
    {
      Tasks = JSON.parse(localStorage.getItem('task'));
    }

    Tasks.forEach((task)=>{
      showTask(task);
    })
}





loadEventListenerALL();