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



// ACCORDION
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

// CUSTOM FORM
var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


// SLIDESHOW
    var slides = document.querySelectorAll('#slides .slide');
    console.log(slides);
    var currentSlide = 0;
    var slideTimer = setInterval(nextSlide, 2000);

    function autoSlide(n) {
      slides[currentSlide].className = 'slide';
      currentSlide = (n+slides.length)%slides.length; // 1%6 = 1, 2%6 = 2 ... 6%6=0
      console.log(currentSlide);
      slides[currentSlide].className = 'slide showing';
    }
    // pause button
    var playing = true;
    var pauseBtn = document.getElementById('pause');

    function pauseSS() {
        
        pauseBtn.innerHTML = '<i class="fas fa-play-circle"></i>';
        
        playing = false;
        clearInterval(slideTimer);
        console.log(playing,'it is paused');
    } // play button
    function playSS() {
       
        pauseBtn.innerHTML = '<i class="fas fa-pause-circle"></i>';
        playing = true;
        slideTimer = setInterval(nextSlide, 2000);
        console.log(playing, 'it is playing');
    }
    // add even to pause/play
    pauseBtn.addEventListener('click', function(){
        console.log('pauseBtn');
        if(playing) {
            pauseSS();
        } else {
            playSS();
        } 
        });
    // next/prev slides
    function nextSlide () {
        // increase count of slide array by 1
        autoSlide(currentSlide+1);
        
        
    }
    function prevSlide() {
        // decrease count of slide array by 1
       
       autoSlide(currentSlide-1);
       
    }
 // reference next and prev buttons
    var nextBtn = document.getElementById('next');
    var prevBtn = document.getElementById('prev');

    // add event listener to listen for click
    nextBtn.addEventListener('click', function(){
        pauseSS();
        nextSlide();
    });
    prevBtn.addEventListener('click', function(){
        pauseSS();
        prevSlide();
    } );

// END SLIDESHOW






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