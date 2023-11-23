const textinput=document.getElementById("text-input")
const task=document.getElementById("task")

function addTask(){
    if(textinput.value === ''){
        alert("you must write something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=textinput.value
        task.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    textinput.value ="";
    saveData();
}
 
// to remove and add the tasks

task.addEventListener("click",function(a){
    if(a.target.tagName ==="LI"){
        a.target.classList.toggle("checked");
        saveData();
    }
    else if(a.target.tagName === "SPAN"){
        a.target.parentElement.remove();
        saveData();
    }
},false);

// to store the data

function saveData(){
    localStorage.setItem("data",task.innerHTML);
}

function showTask(){
  task.innerHTML =localStorage.getItem("data");
}
showTask();