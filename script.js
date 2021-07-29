const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal')
const close = document.getElementById('close')
///Assign and Get Elements by ID


///Assigned array for word variation
var cards = {
  word1: 'Me llamo',
  word2: 'Mi Nombre es',
  word3: 'Buenos días', 
  word4: 'Buenos noches', 
  word5: '¿Cómo estás? ',
  word6: 'Muy bien',
  word7: '¡De nada!',
  word8: 'Por favor',
  word9: '¡Perdon!', 
  word10: '¡Lo siento! ',
  word11: '¿Cuánto cuesta eso?',
  word12: 'Sí',
  word13: 'No',
  word14: 'Claro',
  word15: '¿Qué pasa?', 
  word16: '¿Cómo te va? ',
  word17: '¡Muchas gracias!',
  word18: '(Yo) soy de…',
  word19: 'Hola, soy _____',
  word20: '(Yo) tengo … años',
}


var arrOfQuestions = [[ 'word1', 'My name'],
                      [ 'word2', 'My name is'],
                      [ 'word3', 'Good Morning' ],
                      [ 'word4', 'Good Night'],
                      [ 'word5', 'How are you?'],
                      [ 'word6', 'Very Good'],
                      [ 'word7', 'Your Welcome!'],
                      [ 'word8', 'Please'],
                      [ 'word9', 'Excuse Me'],
                      [ 'word10', 'Sorry'],
                      [ 'word11', 'How much does it cost?'],
                      [ 'word12', 'Yes'],
                      [ 'word13', 'No'],
                      [ 'word14', 'Of Course'],
                      [ 'word15', 'Whats Happening?'],
                      [ 'word16', 'How is it going'],
                      [ 'word17', 'Thank you very much!'],
                      [ 'word18', 'I came from'],
                      [ 'word19', 'Hello, I am _____'],
                      [ 'word20', 'I am ___ years old.']]



 ////Function with math random to randomize the array of Flashcards                 
            
$('button').on('click', function(){
  var question = Math.floor(Math.random()* arrOfQuestions.length);
  $('#panel').html(arrOfQuestions[question][1]);
  //Math.random to randomize array for length of array
  
  
  $('#panel').on('click', function(){
    $('#panel').html(cards[arrOfQuestions[question][0]]);
   })
})

const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}

////Timer Countdown
var timeleft = 10;   
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown")
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000); 

///Event Listeners
openBtn.addEventListener('click', openModal)
close.addEventListener('click', closeModal)

setTimeout(openModal, 5000);
