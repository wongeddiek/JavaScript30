function playSound(e){
  // selecting the html 'audio' and '.key' elements that has the data-key = event keyCode
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // ends the function if no audio is selected
  if (!audio) return;
  //reset the audio time to start, to immediately restart the same audio if played repeatedly
  audio.currentTime = 0;
  audio.play();
  // add the .playing class to the .key div for styling
  key.classList.add('playing');
}

function removeTransition(e){
  //filter out all the transitionend events except for "transform"
  if (e.propertyName != "transform") return;
  //remove the .playing class to "this" <-- "this" is the html element object that was transitioned
  this.classList.remove('playing');
}

// add event listener "keydown" to window, passing event object to the callback function
window.addEventListener('keydown', playSound);

//selects all the .key divs
const keys = document.querySelectorAll('.key');
//for each .key div, add event listener "transitionend"
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
