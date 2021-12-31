
var addToDoButton = document.getElementById("addToDo");
       var toDoContainer = document.getElementById("toDoContainer");
       var inputText = document.getElementById("inputText");
       var clearToDo = document.getElementById("clearToDo");
       addToDoButton.addEventListener("click", function () {
       var paragraph = document.createElement("p");
       paragraph.classList.add("paragraph-styling");
      paragraph.innerHTML = inputText.value;
      toDoContainer.appendChild(paragraph);
       inputText.value = "";

       paragraph.addEventListener("click", function(){
         paragraph.style.textDecoration = "overline";
       });

       paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
       });

       clearToDo.addEventListener("click", function(){
         paragraph.remove();
         inputText.value= "";

       });
         
       });




