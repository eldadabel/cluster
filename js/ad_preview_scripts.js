
	
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

		$(".ratios li").click(function(){

			if ($(this).attr('vid-file')) {

				$(".ratios li").addClass("disable");
				$(this).removeClass("disable");
				$("#video-player").attr("src", "videos/" + $(this).attr('vid-file'));
			}

		});
		
	});


	function closePopUp() {
		$(".popup-fader").hide();
		$(".popup").hide();
	}

