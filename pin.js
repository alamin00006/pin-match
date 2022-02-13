
function myGenerator(){
  
     const randomNumber = Math.round(Math.random()*10000);
       const pin = randomNumber + '';
            let inputFiled = document.getElementById('input-filed');
            inputFiled.value = pin;
           
    if(inputFiled.value.length==4){
       return inputFiled.value;
    }
    else{
       
      return myGenerator();
    }        
   
}
document.getElementById('calc-number').addEventListener('click', function(event){
 const number = event.target.innerText;
 let inputCalc = document.getElementById('input-clac');
 if(isNaN(number)){
    if(number=='C'){
        inputCalc.value = '';
    }
 }
 else{
    inputCalc.value =  inputCalc.value + number;
 }
 
})
// submit
document.getElementById('submit-Button').addEventListener('click', function(){
    let inputCalc = document.getElementById('input-clac').value; 
    let inputFiled = document.getElementById('input-filed').value;
    if(inputCalc == inputFiled){
     document.getElementById("match").style.display = 'block';
     document.getElementById("notify-notmatch").style.display = 'none';
        
    }
    else{
        document.getElementById("match").style.display = 'none';
    document.getElementById("notify-notmatch").style.display = 'block';
      
   
    }
})

