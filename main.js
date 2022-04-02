// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const timeOut = document.querySelector('#modal');
const hearts = document.querySelectorAll('.like-glyph');
timeOut.classList.add('hidden');

function handleClick(e){
  const heart = e.target;
    
  mimicServerCall() 
  .then(() => {
    if (heart.textContent === EMPTY_HEART){
      heart.className === 'activated-heart';
      heart.textContent = FULL_HEART;
      heart.style.color = 'red';
    } else {
        heart.className === '';
        heart.textContent = EMPTY_HEART;
        heart.style.color = '';
    }
  })
  .catch(() => { 
    timeOut.classList.remove('hidden');
    setTimeout(() => {
      timeOut.classList.add('hidden')}, 3000)
  })
}


for (const i of hearts){
  i.addEventListener('click', handleClick)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
