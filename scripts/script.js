li = document.getElementsByClassName("panel-item");
console.log(li);
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    console.log(input.value);
    filter = input.value.toUpperCase().replace(/\s/g, '');
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
$(window).resize(function() {
    search();
});
function search() {
    if( $(window).width() <= 580 ) {
        console.log($(this).width());
        $('#myInput').keyup(function() {
            $('.panel nav').addClass('activeSearch'); 
            myFunction();
        });
        $('.panel nav').click(function() {
            $('.panel nav').removeClass('activeSearch');
            $('#myInput').val("");
            for(let i=0; i<li.length; i++) {
                li[i].style.display = "";
            }
        });
    }
    if( $(window).width() > 580) {
        $('.panel nav').click(function() {
            $('#myInput').val("");
            for(let i=0; i<li.length; i++) {
                li[i].style.display = "";
            }
        });
    }
}
search();

// $('#togglePanel').click

// $(window).resize(function() {
//     if( $(this).width() > 580 ) {

//     }
// });

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