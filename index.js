$(document).ready(function() {
  var panelOne = $('.form-panel.two').height(),
    panelTwo = $('.form-panel.two')[0].scrollHeight;

  $('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
    e.preventDefault();

    $('.form-toggle').addClass('visible');
    $('.form-panel.one').addClass('hidden');
    $('.form-panel.two').addClass('active');
    $('.form').animate({
      'height': panelTwo
    }, 200);
  });

  $('.form-toggle').on('click', function(e) {
    e.preventDefault();
    $(this).removeClass('visible');
    $('.form-panel.one').removeClass('hidden');
    $('.form-panel.two').removeClass('active');
    $('.form').animate({
      'height': panelOne
    }, 200);
  });
});

input_login_true = prompt('Введите логин: ')
input_password_true = prompt('Введите пароль: ')
alert('На сайте ведется разработка, вы прошли временную регистрацию!')

// input_login_true = 'admin'
// input_password_true = '123'

input_login = document.querySelector('.input-login').value
input_password = document.querySelector('.input-password').value

send_btn = document.querySelector('.send-button')

send_btn.onclick = () => {
    input_login = document.querySelector('.input-login').value
    input_password = document.querySelector('.input-password').value

    if(input_login == input_login_true && input_password == input_password_true){
        document.write('<head>'+
        ' <!-- Content Type Meta tag -->'+
        ' <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'+
         
        ' <!--Responsive Viewport Meta tag-->'+
        ' <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">'+
         
   '	<title>Туду-лист</title>'+
         
   '	<!-- Roboto font embed -->'+
   '	<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">'+
   '	<!-- Stylesheets -->'+
   '	<link rel="stylesheet" type="text/css" href="css/reset.min.css">'+
   '	<link rel="stylesheet" type="text/css" href="css/stylee.css">'+
   '</head>'+
   '<body>'+
 
 '		<header>'+
 '			<input type="text" placeholder="Введите ваши задания" id="item">'+
 '			<button id="add">'+
 '				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><g><path class="fill" d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"/></g></svg>'+
 '			</button>'+
 '		</header>'+
 
 '		<div class="container">'+
 '			<!-- Uncompleted tasks -->'+
 '			<ul class="todo" id="todo"></ul>'+
 
 '			<!-- Completed tasks -->'+
 '			<ul class="todo" id="completed"></ul>'+
 '		</div>'+
 
 		'<!-- JavaScripts -->'+
 		'<script src="js/main.js"></script>'+
 	'</body>'
        )
    }    
    else if(input_login != input_login_true || input_password != input_password_true){
        alert('Неверный логин или пароль')
    }    
} 

// // Создайте кнопку "закрыть" и добавьте ее к каждому элементу списка
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Нажмите на кнопку закрыть, чтобы скрыть текущий элемент списка
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Добавление символа "галочка" при нажатии на элемент списка
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Создайте новый элемент списка при нажатии на кнопку "Добавить"
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("Вы не ввели информацию!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }

