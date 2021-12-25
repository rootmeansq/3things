let todoText = "";

document.getElementById("input-box-div").addEventListener('keypress', function(event){
    if (window.event.keyCode ===13) {
        todoText=document.getElementById('input-box').value;
        console.log(todoText);
        document.getElementById('todoText').innerHTML = todoText;
        // document.getElementById('tryshit').innerHTML = todoText;
        // document.getElementById('tryshit').innerHTML = notesT;
        document.getElementById('input-box-div').style.visibility="hidden";
        document.getElementById('todoText').style.visibility="visible";
        
    }
})

document.getElementById("delete").addEventListener("click", () => {
    document.getElementById('input-box-div').value = todoText;
    document.getElementById('input-box-div').style.visibility="visible"
    document.getElementById('todoText').style.visibility="hidden"
})

document.getElementById("done").addEventListener("click", () => {
    document.getElementById('todoText').style.textDecoration = "line-through";
})