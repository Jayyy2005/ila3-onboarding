function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomNumber = getRandomInt(1, 100);
  
  function submitText() {
    const number = document.getElementById("myInput").value;
  
    if (number == randomNumber) {
      alert("You won! The correct number was: " + number);
  
      const newButton = document.createElement('button');
      newButton.id = 'Replaybutton';
      newButton.textContent = 'Play Again';
      document.body.appendChild(newButton);
    //https://www.altcademy.com/blog/how-to-create-a-button-in-javascript/

      const button = document.querySelector('#Replaybutton');
      button.addEventListener('click', onButtonClick);
  
    } else {
      if (number > randomNumber) {
        alert("Your guess was too high!");
      } else {
        alert("Your guess was too low!");
      }
    }
  }
  
  function onButtonClick() {
    const inputBox = document.getElementById("myInput");
    inputBox.value = '';
    const button = document.querySelector('#Replaybutton');
    button.remove();
    location.reload();
  }
  