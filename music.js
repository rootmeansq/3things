let UpbeatlistSongs = ["https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3","https://www.mboxdrive.com/Bilionera%20(Radio%20Edit).mp3"];
let speecheslistSongs = ["https://www.mboxdrive.com/motivations.mp3","https://www.mboxdrive.com/Bilionera%20(Radio%20Edit).mp3"];
var playlistCounter = 0;



document.getElementById('addbttn').addEventListener("click", (event) =>{
    musChoice();
    
});


function musChoice(){
    const choiceVal = document.getElementById("musicType").value;
    // document.getElementById("tryshit").innerHTML=choiceVal
    selectPlaylist(choiceVal);
}




function selectPlaylist(mChoice){
    if (mChoice==="Upbeat") {
        document.getElementById("next").addEventListener("click", () =>{
            document.getElementById("playlist").src= String(UpbeatlistSongs[playlistCounter]) ;
            // document.getElementById("srfile").innerHTML=UpbeatlistSongs[playlistCounter];
            playlistCounter=playlistCounter+1;
            document.getElementById("audioPlayer").load()
            console.log(mChoice)
            
        })
        
    } 
    
    if(mChoice==="Speeches") {
        document.getElementById("next").addEventListener("click", () =>{
            document.getElementById("playlist").src= String(speecheslistSongs[playlistCounter]);
            document.getElementById("audioPlayer").load()
            // document.getElementById("srfile").innerHTML=speecheslistSongs[playlistCounter];
            playlistCounter=playlistCounter+1;
        })
    }   
}
