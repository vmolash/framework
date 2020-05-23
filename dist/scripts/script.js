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
        $('#myInput').keyup(function() {
            $('.panel nav').addClass('activeSearch'); 
            myFunction();
        });
        $('.panel label').click(function() {
            console.log('hi ther');
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

// Shipping form
$(document).ready(function() {
    // http://ZiptasticAPI.com/ZIPCODE OR http://ZiptasticAPI.com/ZIPCODE?callback=myCallback
   
       
   
       $('#zip').keyup(function(e) {
           var zip = $(this).val();
           if(zip.length === 5 && $.isNumeric(zip)) {
               var requestUrL = 'http://ZiptasticAPI.com/' + zip + '?callback=?';
               $.getJSON(requestUrL, null, function(data){
                   console.log(data);
                   if(data.city) $('#city').val(data.city);
                   if(data.state) $('#state').val(data.state);
               });
           }
       });
   
       // phone fix
       $('input[type="tel"]').keyup(function(e) {
           var tar = e.target;
           var val = tar.value;
           console.log(val);
           if(val.length == 3) { 
               tar.value = val + '-';
           }
           if(val.length == 7) {
               tar.value = val + '-';
           }
       })
   }); //end doc ready
   // end Shipping form