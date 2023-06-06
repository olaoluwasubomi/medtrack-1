// function showMedicationForm(drugName) {
//     const popup = document.getElementById('medicationPopup');
//     const medicationName = document.getElementById('medicationName');

//     medicationName.textContent = drugName;

//     popup.style.display = 'block';
// }
// function hideMedicationForm() {
//     const popup = document.getElementById('medicationPopup');
//     popup.style.display = 'none';
// }
// document.getElementById('medicationForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const dosage = document.getElementById('dosage').value;
//     const frequency = document.getElementById('frequency').value;

//     console.log('Dosage:', dosage);
//     console.log('Frequency:', frequency);
//     hideMedicationForm(); // Close the pop-up form
// });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var one = document.getElementById('myButton');
var two = document.getElementById('button1');
var three = document.getElementById('button2');
var four = document.getElementById('button3');
var five = document.getElementById('button4');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
one.onclick = function(){
    modal.style.display = "block";
}
two.onclick = function(){
    modal.style.display = "block";
}
three.onclick = function(){
    modal.style.display = "block";
}
four.onclick = function(){
    modal.style.display = "block";
}
five.onclick = function(){
    modal.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}