

!function($,a,i){$(a).ready(function(){$(".slider").flexslider({animation:"fade",controlNav:!0,directionNav:!1,manualControls:".flex-control-nav li"}),$(".menu-toggle").click(function(){$(".main-navigation .menu").slideToggle()}),$("[data-bg-color]").each(function(){var a=$(this).data("bg-color");$(this).css("background-color",a)}),$("[data-background]").each(function(){var a=$(this).data("background");$(this).css("background-image","url("+a+")")});var a=$(".filterable-items");a.imagesLoaded(function(){a.isotope({filter:"*",layoutMode:"fitRows",animationOptions:{duration:750,easing:"linear",queue:!1}})}),$(".filterable-nav a").click(function(i){i.preventDefault(),$(".filterable-nav .current").removeClass("current"),$(this).addClass("current");var n=$(this).attr("data-filter");return a.isotope({filter:n,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1}),$(".mobile-filter").change(function(){var i=$(this).val();return a.isotope({filter:i,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1}),(new WOW).init()}),$(i).ready(function(){})}(jQuery,document,window);


$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});


function myFunction() {
  var input, filter, table, tr, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    a = tr[i].getElementsByTagName("a")[0];
    if (a) {
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

