$(document).ready(function(){

	$('#menu-wrap').prepend("<div id='menu-icon'><b>Меню</b></div>");
	$("#menu-icon").on("click", function(){
	  $(".menu").slideToggle();
	  $(".lvl2").hide();
	});

	$('button').hover(function(e) {
	// $('button').on("click", function(e) {
		if ($(this).hasClass('grid')) {
			$('#container ul').removeClass('list').addClass('grid');
			}
		else if($(this).hasClass('list')) {
			$('#container ul').removeClass('grid').addClass('list');
			}
		}, 
	function(e) {
		if ($(this).hasClass('list')) {
			$('#container ul').removeClass('list').addClass('grid');
			}
	});

	$('.sortable-ul').sortable({
					handle: '.handle'
				});

	$(".rename").hide();

	$(".product-name").on("click", function() {
		let i = $(this).attr("id");
		let form = $("#rename-" + i);
		$("#" + i).hide()
		form.show($(this).attr("id"));
	});

	$("input[type='submit']").on("mousedown", function() {
		$(".rename").hide();
		par = ($(this).parent().attr("id"));
		newName = $("#" + par + " input[name='change-name']").val();
		console.log($("#" + par).siblings("h2"));
		$("#" + par).siblings("h2").text(newName);
		$("#" + par).siblings("h2").show()
		// $(("#" + par).siblings("h2")).text(newName);
	});


	

});
