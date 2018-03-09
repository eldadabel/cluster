
	function openFilters(){
		var newTop = $(".filters").height();
		$( ".new-creatives" ).animate({
		    
		    top: newTop
		  }, 500, function() {
		    $(".filters").addClass("open");
		    $(".add-filter-btn").html("Close Filters");
		   
		  });

		 $('html, body').animate({
			    scrollTop: ($('.filters').offset().top)
			},500);
	}


	function closeFilters(){
		$( ".new-creatives" ).animate({		    
		    top: "0"
		  }, 500, function() {
		    $(".filters").removeClass("open");
		    $(".add-filter-btn").html("+ Add Filters");
		  });
	}
	

	$(document).ready(function(){
		$(".add-filter-btn").click(function(){
			if ($(".filters").hasClass("open")) {
				closeFilters();
			} else {
				openFilters();
			}
		});
	

		$(".submit-filters-btn").click(function(){
			closeFilters();
			$(".preloading").show();
			setTimeout(function(){
				$(".preloading").hide();
				$(".filtered").hide();
				$(".results-num").html("Showing 452 results:");

			}, 1500);
			
		});

		$(".new-creatives ul li").click(function(){
			window.location.href = "ad_page.html";
		});
		
	});

