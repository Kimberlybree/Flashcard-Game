const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal')
const close = document.getElementById('close')
//Assigned Modal for getting each element - instruction Box.


///Assigned array for word variation
 var cards = {
  word1: 'Arrays',
  word2: 'Elements',
  word3: 'Index', 
  word4: 'Multi-dimensional Arrays',  
  word5: 'Nested array elements',
  word6: 'Variable',
  word7: 'Function',
  word8: 'JavaScript',
  word9: 'Method', 
  word10: 'Operator',
  word11: 'Script',
  word12: 'Anchors',
  word13: 'Elements',
  word14: 'String',
  word15: 'href', 
  word16: 'length',
  word17: 'parent',
  word18: 'getDay',
  word19: 'getHours',
  word20: 'NaN',
}


//Array of Questions
var arrOfQuestions = [[ 'word1', 'An array is an ordered collection of values.'],
                      [ 'word2', 'An element is a value in an array.'],
                      [ 'word3', 'The ordered position of the elements in the array.' ],
                      [ 'word4', 'A two-dimensional array is an array within an array. If you fill this array with another array you get a three-dimensional array and so on.'],
                      [ 'word5', 'They are accessed by using [index][index]….. (number of them depends upon the number of arrays deep you want to go inside).'],
                      [ 'word6', 'A symbol representing a quantity that assumes a range of values.'],
                      [ 'word7', 'A user-defined or built-in set of statements that perform a task. It can also return a value when used with the return statement.'],
                      [ 'word8', 'A scripting language developed by Netscape for HTML documents. Scripts are performed after specific user-triggered events. Creating JavaScript Web documents requires a text editor and compatible browser.'],
                      [ 'word9', 'A function assigned to an object. For example, bigString.toUpperCase() returns an uppercase version of the string contained in bigString.'],
                      [ 'word10', 'Performs a function on one or more operands or variables.'],
                      [ 'word11', 'One or more JavaScript commands enclosed with a script tag.'],
                      [ 'word12', ' A piece of text that can be the target of a hypertext link. This is a read-only object which is set in HTML with <A> tags.'],
                      [ 'word13', 'An array of form elements in source order, including buttons, check boxes, radio buttons, text and text area objects. The elements can be referred to by their index'],
                      [ 'word14', 'A series of characters defined by double or single quotes.'],
                      [ 'word15', 'Returns a string with the entire URL. All other location and link properties are substrings of href, which can be changed at any time.']
                      [ 'word16', 'An integer reflecting a length- or size-related property of an object. '],
                      [ 'word17', 'Refers to the calling document in the current frame created by a <frameset> tag. Using parent allows access to other frames created by the same <FRAMESET> tag. For example, two frames invoked are called index and contents.'],
                      [ 'word18', 'Returns the day of the week as an integer from zero (Sunday) to six (Saturday).'],
                      [ 'word19', 'Returns the hour of the day in 24-hour format, from zero (midnight) to 23 (11 PM). Method of Date. See setHours METHOD.'],
                      [ 'word20', 'Not a Number']]

 ////Function with implemented Math.Random to randomize the array of Flashcard selection                         
$('button').on('click', function(){
  var question = Math.floor(Math.random()* arrOfQuestions.length);
  $('#panel').html(arrOfQuestions[question][1]); 
  //Math.random to randomize array for length of array
  
  
  $('#panel').on('click', function(){
    $('#panel').html(cards[arrOfQuestions[question][0]]);
   })
})


///Modal Functionality
const openModal = () => {
  modal.style.display = 'block';
}
const closeModal = () => {
  modal.style.display = 'none';
}


///Event Listeners for Modal Click
openBtn.addEventListener('click', openModal)
close.addEventListener('click', closeModal)

setTimeout(openModal, 5000);

////Timer Countdown 
var timeleft = 90;   
var downloadTimer = setInterval
( function()   {
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown")
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000); 


