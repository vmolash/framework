var i,acc=document.getElementsByClassName("accordion");for(i=0;i<acc.length;i++)acc[i].addEventListener("click",function(){this.classList.toggle("accordion-active");var a=this.nextElementSibling;a.style.display="block"===a.style.display?"none":"block"});var x,i,j,selElmnt,a,b,c;for(x=document.getElementsByClassName("custom-select"),i=0;i<x.length;i++){for(selElmnt=x[i].getElementsByTagName("select")[0],a=document.createElement("DIV"),a.setAttribute("class","select-selected"),a.innerHTML=selElmnt.options[selElmnt.selectedIndex].innerHTML,x[i].appendChild(a),b=document.createElement("DIV"),b.setAttribute("class","select-items select-hide"),j=1;j<selElmnt.length;j++)c=document.createElement("DIV"),c.innerHTML=selElmnt.options[j].innerHTML,c.addEventListener("click",function(){var a,b,c,d,e;for(d=this.parentNode.parentNode.getElementsByTagName("select")[0],e=this.parentNode.previousSibling,b=0;b<d.length;b++)if(d.options[b].innerHTML==this.innerHTML){for(d.selectedIndex=b,e.innerHTML=this.innerHTML,a=this.parentNode.getElementsByClassName("same-as-selected"),c=0;c<a.length;c++)a[c].removeAttribute("class");this.setAttribute("class","same-as-selected");break}e.click()}),b.appendChild(c);x[i].appendChild(b),a.addEventListener("click",function(a){a.stopPropagation(),closeAllSelect(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function closeAllSelect(a){var b,c,d,e=[];for(b=document.getElementsByClassName("select-items"),c=document.getElementsByClassName("select-selected"),d=0;d<c.length;d++)a==c[d]?e.push(d):c[d].classList.remove("select-arrow-active");for(d=0;d<b.length;d++)e.indexOf(d)&&b[d].classList.add("select-hide")}document.addEventListener("click",closeAllSelect);var slideIndex=1;showSlides(slideIndex);function plusSlides(a){showSlides(slideIndex+=a)}function currentSlide(a){showSlides(slideIndex=a)}function showSlides(a){var b=document.getElementsByClassName("mySlides");a>b.length&&(slideIndex=1),1>a&&(slideIndex=b.length);for(let c=0;c<b.length;c++)b[c].style.display="none";b[slideIndex-1].style.display="block"}