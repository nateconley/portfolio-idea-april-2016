$(document).ready(function(){
	// Waterfall Navigation
	$(document).on("scroll", function(){
	  var body = $('body');
	  if (body.scrollTop() > 100) {
	    $('nav').addClass('fix-nav');
	  } else {
	    $('nav').removeClass('fix-nav');
	  }
	});
	// End WaterfallNaviagtion


	// Gallery Navigation
	var hideDropdowns = function() {
	  $("#gallery-nav-writing").hide();
	  $("#gallery-nav-work").hide();
	}

	hideDropdowns();

	$("#gallery-nav > p").click(function(){
	  var galleryId = this.id;
	  if(galleryId === "all") {
	    hideDropdowns();
	  } else {
	    hideDropdowns();
	    $('#gallery-nav-' + galleryId).show();
	  }
	});
	// End Gallery Navigation



});