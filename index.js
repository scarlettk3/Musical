 var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//usage of for loops is important!
 for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       //w-l=.drum class
       // this.style.color="white"; //so when we click on the buttons the letters will become white.
    //FOR ONLY CLICK WITH ARROW-NOT FROM KEYBOARD.   
   var buttonInnerHTML=this.innerHTML;

   makeSound(buttonInnerHTML)//callinf the function for w-l.  

   buttonAnimation(buttonInnerHTM)//callinf the function for w-l is pressed and made sound.  

}); 
    
}
    //    switch (buttonInnerHTML) {
    //         case "w":
    //             var tom1=new Audio("sounds/tom-1.mp3");
    //             tom1.play();
    //             break;
    //         case "a":
    //             var tom2=new Audio("sounds/tom-2.mp3");
    //             tom2.play();
    //             break;
    //         case "s":
    //             var tom3=new Audio("sounds/tom-3.mp3");
    //             tom3.play();
    //             break;
    //         case "d":
    //             var tom4=new Audio("sounds/tom-4.mp3");
    //             tom4.play();
    //             break;
    //         case "j":
    //             var snare=new Audio("sounds/snare.mp3");
    //             snare.play();
    //             break;
    //         case "k":
    //             var crash=new Audio("sounds/crash.mp3");
    //             crash.play();
    //             break;
    //         case "l":
    //             var bass=new Audio("sounds/kick-bass.mp3");
    //             bass.play();
    //             break;
    //         default:
    //             break;
        
//detecting keyboard press
document.addEventListener("keypress",function(event){
//     console.log(event);
makeSound(event.key);//w-l.reacts to only those.
buttonAnimation(event.key)  
});
function makeSound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var bass=new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        default:
            break;
    }
    }
    //for .pressed in css. 
function buttonAnimation(currentkey){    //currentkey=w-l
var activeButton=document.querySelector("."+currentkey)//.w-.l

activeButton.classList.add("pressed");//add new class to the active button
//after 100ms it will remove the class pressed.
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);
}