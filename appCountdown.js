const inputHours = document.getElementById("hours");
const inputMinutes = document.getElementById("minutes");
const inputSeconds = document.getElementById("seconds");
// const inputYoutube = document.getElementById("musicType");

document.getElementById('addbttn').addEventListener("click", () =>{
    const hrs = Number(inputHours.value);
    const mins = Number(inputMinutes.value);
    const secs = Number(inputSeconds.value);
    // const ytvid = inputYoutube.value;
    countdown(hrs,mins,secs);
} )


function outputTime(hrs, mins, secs){
    const sumtime = String(hrs)+" : "+String(mins)+" : "+String(secs);
    document.getElementById("timertext").innerHTML=sumtime;
    console.log("outputTime");
}


function countdown(hrs,mins,secs){
    setInterval(() => {
        if (secs>0) {
            outputTime(hrs,mins,secs);
            secs = secs-1
        }else{
            if (mins>0) {
                mins = mins -1;
                secs =59;
                outputTime(hrs,mins,secs);
                
            } else {
                if (hrs>0) {
                    mins=59;
                    secs = 59;
                    hrs=hrs-1;
                    outputTime(hrs, mins, secs);
                    
                } else {
                    outputTime(hrs, mins, secs)
                    
                }
                
            }
        }  
    
    }, 1000); 
}

document.getElementById('add').addEventListener("click", () => {
    document.getElementById("formblock").style.visibility= "visible"
})

document.getElementById('close-bttn').addEventListener("click", () => {
    document.getElementById("formblock").style.visibility= "hidden"
})