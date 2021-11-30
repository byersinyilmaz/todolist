let addToDo = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText")
let clearToDo = document.getElementById("clearToDo")



addToDo.addEventListener("click",function(){

    let paragraph = document.createElement("ul");
    paragraph.classList.add("list-styling");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

   
   
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration = "line-through";
    });

    
    
    paragraph.addEventListener("dblclick",function(){
        paragraph.remove();
    });
   
   
   
   clearToDo.addEventListener("click", function(){
        paragraph.remove();
    });

    



})
