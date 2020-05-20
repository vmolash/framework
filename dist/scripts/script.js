function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}

// Active link sets to green color when click on it
// const NAVCONTAINER = document.querySelector('nav');
// const NAVITEMS = NAVCONTAINER.getElementsByClassName('nav-item');

// for(let i = 0; i < NAVITEMS.length; i++) {
//   NAVITEMS[i].addEventListener('click', function() {
//     let current = document.getElementsByClassName('active');
//     current[0].className = current[0].className.replace(' active', '');
//     this.className += ' active';
//   });
// }

// Hide navigation on mobile version when click on any link
// console.log(window.screen.width);
// const NAVIGAT = document.querySelector('nav');
// const LAB = document.querySelector('label');

// if(window.screen.width < 500) {
//   LAB.addEventListener('click', function() {
//     NAVIGAT.classList.toggle('show');
//   });
//   NAVIGAT.addEventListener('click', function() {
//     this.classList.toggle('show');
//   });
// }

