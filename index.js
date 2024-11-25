let inputSearch=document.getElementById("inputSearch");
let search=document.getElementById("search");
let resultInput=document.getElementById("resultInput");
let InfoList;
if(localStorage.getItem("Info")== null)
{
    InfoList=[];
}
else
{
    InfoList=JSON.parse(localStorage.getItem("Info"));
    displayInfo(InfoList);
}
function getName(){
    var info={
        name:inputSearch.value
    };
   
    InfoList.push(inputSearch.value);
   localStorage.setItem("Info",JSON.stringify(InfoList));
   
      displayInfo(InfoList);
   clearForm();
}
function displayInfo(anyArray){
    let cartoona="";
  for(let i=0 ; i<anyArray.length;i++){
cartoona+=`

     <tr>
     <td>
         
         <input  class="form-control w-75" type="text" placeholder="${anyArray[i]}">
        <a id="search" class="btn btn-danger" onclick="deleteProduct()" href="#">
            <i class="fas fa-times"></i>
        </a></td></tr>
        `;
     }
    document.getElementById("tablebody").innerHTML=cartoona;
    }


function deleteProduct(index){
    InfoList.splice(index,1);
    localStorage.setItem("Info",JSON.stringify(InfoList)); 
    displayInfo(InfoList);

}
function clearForm(){
    inputSearch.value="";
    }
// *****************************
let babyLaugh=document.getElementById("babyLaugh");
var playSound=new Audio();
playSound.src="baby.mp3";
babyLaugh.addEventListener("mouseover",function(){
    playSound.play();
})





//let sound=document.getElementById("sound");

babyLaugh.addEventListener("mousemove",function(){
    let r=Math.round(Math.random()*225);
   
     let g=Math.round(Math.random()*225);
      let b=Math.round(Math.random()*225);
    babyLaugh.style.backgroundColor=`rgb(${r},${g},${b})`;
   
})
babyLaugh.addEventListener("mouseout",function(){
    babyLaugh.style.backgroundColor="white";
    
})
// ***********************
let colorR=document.getElementById("colorR");
let colorG=document.getElementById("colorG");
let colorB=document.getElementById("colorB");
let Q4=document.getElementById("Q4");
colorR.addEventListener("mousemove",function(){
    Q4.style.backgroundColor="red";
})
colorG.addEventListener("mousemove",function(){
    Q4.style.backgroundColor=" rgb(32, 250, 36)";
})
colorB.addEventListener("mousemove",function(){
    Q4.style.backgroundColor="blue";
})
Q4.addEventListener("mouseout",function(){
    Q4.style.backgroundColor="white";
})
// ************************

let nameInput=document.getElementById("nameInput");
let emailInput=document.getElementById("emailInput");
let phoneInput=document.getElementById("phoneInput");
let nameAlert=document.getElementById("nameAlert");
let emailAlert=document.getElementById("emailAlert");
let phoneAlert=document.getElementById("phoneAlert");
// *******************************
function validateName(){
    var regex=/^[a-zA-Z]{2,50}$/;
    if(regex.test(nameInput.value)==true){
        nameAlert.classList.replace("d-flex","d-none");
       
    }
    else{
        nameAlert.classList.replace("d-none","d-flex");
    }}
    nameInput.addEventListener("blur",validateName);
       
// *****************

function validateEmail(){
    var regex=/^[a-zA-Z0-9@.]{3,50}$/;
    if(regex.test(emailInput.value)==true){
        emailAlert.classList.replace("d-flex","d-none");
      
    }
    else{
        emailAlert.classList.replace("d-none","d-flex");
    }}
    emailInput.addEventListener("blur",validateEmail);
       

    function validatePhone(){
        var regex=/^01[01250-9]{9}$/;
        if(regex.test(phoneInput.value)==true){
            console.log("ll00ll");
            phoneAlert.classList.replace("d-flex","d-none");
          
        }
        else{
            phoneAlert.classList.replace("d-none","d-flex");
        }}
        phoneInput.addEventListener("blur",validatePhone);
           
    // ****************************
var countDownDate = new Date("Sept 9, 2020 8:11:10").getTime();
var x = setInterval( function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   days.innerHTML=days;
  clock1.innerHTML=hours;
  clock2.innerHTML=minutes;
  clock3.innerHTML=seconds;
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
  }
     }, 1000);

   