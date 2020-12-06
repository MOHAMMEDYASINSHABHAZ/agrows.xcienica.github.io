$(document).on('click', '.metismenu li a', function(e) {
	e.preventDefault();
	
   var page = $(this).attr('href');

   if($(this).attr('target') == '_blank')
	   window.open(page,'_blank');

   if(page == 'javascript:void(0);')
	   return false;

   window.location.hash = page;

	$(".metismenu li, .metismenu li a").removeClass('active');
	$(".metismenu ul").removeClass('in');

	$(".metismenu a").each(function () {
	   var pageUrl = window.location.hash.substr(1);
	   if($(this).attr('href') == pageUrl) { 
		   $(this).addClass("active");
		   $(this).parent().addClass("active"); // add active to li of the current link
		   $(this).parent().parent().addClass("in");
		   $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
		   $(this).parent().parent().parent().addClass("active");
		   $(this).parent().parent().parent().parent().addClass("in"); // add active to li of the current link
		   $(this).parent().parent().parent().parent().parent().addClass("active");
	   }
   });

	if(page == "javascript:void(0);")
	   return false;
	   my_ajax(page);
});

function my_ajax(page)
{
   $.ajax({
	   url: 'ajax/'+page,
	   cache:false,
	   dataType: 'html',
	   type: "GET",
	   success: function(data) {
		   $("#result").empty();
		   $("#result").html(data);
		   window.location.hash = page;
		   $(window).scrollTop(0);
	   }
   });
}

$(document).ready(function(){
   var path = window.location.hash.substr(1);
   
   if(path == "index.html")
   {
	   my_ajax('index.html');
   }
   else
   {
	   my_ajax('index.html');
   }
   
});