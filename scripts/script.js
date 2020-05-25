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
$(window).resize(function () {
    searchDesktop();
});
$(window).resize(function() {
    searchMobile();
});
searchDesktop();
searchMobile();
function searchMobile() {
    if( $(window).width() <= 580 ) {
        console.log(window.screen.width);
        $('#myInput').keyup(function() {
            console.log('hi keyup');
            $('.panel nav').addClass('activeSearch'); 
            myFunction();
        });
        $('.panel label').click(function() {
            console.log('hi there');
            $('.panel nav').toggleClass('activeSearch');
        })
        $('.panel nav').click(function() {
            $('.panel nav').removeClass('activeSearch');
            $('#myInput').val("");
            for(let i=0; i<li.length; i++) {
                li[i].style.display = "";
            }
        });
    }
}
function searchDesktop() {
    if( $(window).width() > 580) {
        console.log(window.screen.width);
        $('.panel nav').click(function() {
            $('#myInput').val("");
            for(let i=0; i<li.length; i++) {
                li[i].style.display = "";
            }
        });
    }
}

// searchMobile();
// searchDesktop();



// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("accordion-active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// const mainSections = document.querySelectorAll('section h2');
//     const appearSections = {
//       threshold: 0,
//       rootMargin: '0px 0px 0px 0px'
//   };

  
//     const activeOnScroll = new IntersectionObserver(function(entries, activeOnScroll){
      
//       entries.forEach(entry => {
//         let id = entry.target.id;
//         let link = document.querySelector('[href="#'+id+'"');
//           if(!entry.isIntersecting) { // if not true
//               return;
//           } else {
//             let current = document.getElementsByClassName('active');
//             current[0].className = current[0].className.replace(' active', '');
//             link.classList.add('active');
//             activeOnScroll.unobserve(entry.target);
//           }
//       });
//   }, appearSections);
  
//   mainSections.forEach(section => {
//     activeOnScroll.observe(section);
//   })