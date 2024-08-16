function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomNumber = getRandomInt(1, 100);
  console.log(randomNumber);
  //Von ChatGPT


function submitText() {

    const number = document.getElementById('myInput').value;
    alert(number);
    if(number == randomNumber){
        alert("GGS");
    }else if(number != randomNumber){
        if(number > randomNumber){
            alert("Dein Guess ist zu hoch");
        }else{
            alert("Dein Guess ist zu tief");
        }
    }
}
