let gameBox=document.querySelector(".gameBox");
let gameBoxBtn=document.querySelectorAll(".gameBoxBtn");
let reset=document.querySelector("#reset");
let playAgain=document.querySelector("#playAgain");
let winmsg=document.querySelector("#winmsg");
let turnmsg=document.querySelector(".turnmsg");
let clickaudio=document.querySelector(".clickaudio");
let winaudio=document.querySelector(".winaudio");
let drowaudio=document.querySelector(".drowaudio");
let turn=1;
let winpetern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=0;
let flag=1;

function winner(){
    winpetern.forEach((petern)=>{

        let petern1=gameBoxBtn[petern[0]].innerText;
        let petern2=gameBoxBtn[petern[1]].innerText;
        let petern3=gameBoxBtn[petern[2]].innerText;
        if(petern1!="" && petern2!="" && petern3!="" )
        {
            if(petern1==petern2 && petern2==petern3)
            {
                flag=0;
                gameBoxBtn.forEach((btn)=>{
                    btn.disabled=true;
                });
                setTimeout(()=>{
                    win(petern1);
                },200);
                
            }
        }
    });
    if(count==9 && flag)
    {
        setTimeout(()=>{
            drow();
        },200);
    }   
}
gameBoxBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        clickaudio.innerHTML="<audio class='playaudio' src='Fade_In.m4a' height='0px'  autoplay></audio>";
        if(turn)
        {
            btn.innerText="X";
            btn.style.color="red";
            turn=0;
            turnmsg.innerText="Player O's turn";

        }
        else
        {
            btn.innerText="O";
            btn.style.color="blue";
            turn=1;
            turnmsg.innerText="Player X's turn";
        }
        btn.disabled=true;
        btn.style.backgroundColor="lightgreen";

        count++;
        winner();
    });
});


function win(winner){
   winaudio.innerHTML="<audio class='winplayaudio' src='Crystal_Piano.m4a' height='0px'  autoplay></audio>";
   winmsg.innerText=`😇 Player ${winner} is Winner 😇`;
   document.querySelector(".beforewin").setAttribute("class","container-afterwin");
   turnmsg.remove();
}
function drow(){
    drowaudio.innerHTML="<audio class='drowplayaudio' src='Spring.m4a' height='0px'  autoplay></audio>";
    winmsg.innerText="😜 Match DROW!!! 😜";
    document.querySelector(".beforewin").setAttribute("class","container-afterwin");
    turnmsg.remove();
}


reset.addEventListener("click",()=>{
    window.location.reload();
});

playAgain.addEventListener("click",()=>{
    window.location.reload();
})


