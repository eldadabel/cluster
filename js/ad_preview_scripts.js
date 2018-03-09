
	
	$(document).ready(function(){
		$(".assets li").click(function(){

			if ($(this).attr('pop-id')) {
				$(".popup-fader").show();

				var popupId = $(this).attr('pop-id');

				$("." + popupId).show();
				$(".close-btn").click(function(){
					closePopUp();
				});
			}

		});
		
	});


	function closePopUp() {
		$(".popup-fader").hide();
		$(".popup").hide();
	}

