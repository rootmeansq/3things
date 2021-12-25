let notesT = "";
document.getElementById("submitBttn").addEventListener("click", () => {
        notesT=document.getElementById('notesTextArea').value;
        document.getElementById('notesText').innerHTML = notesT;
        // document.getElementById('tryshit').innerHTML = notesT;
        document.getElementById('notesTextArea').style.visibility="hidden"
        document.getElementById('notesText').style.visibility="visible"
})

document.getElementById("editBttn").addEventListener("click", () => {
        
        document.getElementById('notesTextArea').value = notesT;
        document.getElementById('notesTextArea').style.visibility="visible"
        document.getElementById('notesText').style.visibility="hidden"
})

document.getElementById('notesBttn').addEventListener("click", () => {
    document.getElementById("containerNotes").style.visibility= "visible"
    document.getElementById("notesText").style.visibility= "visible"
})

document.getElementById('closenotes').addEventListener("click", () => {
    document.getElementById("containerNotes").style.visibility= "hidden"
    document.getElementById("notesText").style.visibility= "hidden"
})