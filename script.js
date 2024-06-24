function onmouseHome(){
   var element =  document.getElementById('display');

   element.innerHTML = '<div class="image"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png" height="100px" alt=""><h1 class="message">Welcome</h1></div>'
}

function onmouseShop(){
    var element =  document.getElementById('display');

    element.innerHTML = '<div class="image"><a href="prod.html"><img src="https://cdn-icons-png.freepik.com/512/2178/2178404.png" height="100px" alt=""></a><h1 class="message">Shop With Us</h1></div>'
 }

function onmouseAbout(){
    var element =  document.getElementById('display');

    element.innerHTML = '<div class="image"><a href="about.html"><img src="https://t4.ftcdn.net/jpg/01/07/99/99/360_F_107999940_cWIzsBx0HOrei6vPC0341sjG0j5CjNoC.jpg" height="100px" alt=""></a><h1 class="message">Get To Know Us</h1></div>'
 }
function onmouseCall(){
    var element =  document.getElementById('display');

    element.innerHTML = '<div class="image"><a href="contact.html"><img src="https://freesvg.org/img/Mobile-Icon-White-on-Black.png" height="100px" alt=""></a><h1 class="message">Give Us A Call</h1></div>'
 }

// function mouseOut() {
//     document.addEventListener('DOMContentLoaded', function() {
//         var element = document.getElementById('display');
        
//         element.addEventListener('mouseout', function() {
//             element.innerHTML = remove();
//         });
//     });
// }
// function remove() {
//     return ''; 
// }

// mouseOut();
