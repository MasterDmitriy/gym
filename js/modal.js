var modal = document.getElementById('myModal');


var btn = document.getElementById("modalBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var form = document.querySelector('#mc-form')
var from = form.querySelector('#val-email')
var validateMessage = form.querySelector('.validate-message')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = from.value;
  if(reg.test(address) == false) {
    validateMessage.innerHTML = 'Введите корректный e-mail';
    validateMessage.style.color = 'red';
  }
  else {
      validateMessage.innerHTML = 'Все хорошо';
      validateMessage.style.color = 'green';
  }
})