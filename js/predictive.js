

/* jQuery */

$(function ()
{

	$('#slider1').owlCarousel(
	{
		loop:true,
		margin:10,
		nav:true,
		items:1,
		dots:2,
		animateOut: 'fadeOut',
		autoplay:3000,
		autoplayTimeout:5000
	})

	// $('.slider2').owlCarousel(
	// {
	// 	loop:true,
	// 	margin:25,
	// 	nav:true,
	// 	dots:0,
	// 	responsive:
	// 	{
	// 		0:{
	// 			items:1
	// 		},
	// 		768:{
	// 			items:2
	// 		},
	// 		1200:{
	// 			items:3
	// 		}
	// 	}
	// })

	// menuFrame

	var m1Y = m2Y = m3Y = m4Y = 0;
	var gap = 45;

	function checkScrollTop()
	{
		if( $(window).width() >= 768 )
		{
			gap = 55;
		}

		menuY = $(".banner.sliderFrame").offset().top + $(".banner.sliderFrame").height();
		m1Y = $("#Block01").offset().top - gap;
		m2Y = $("#Block02").offset().top - gap;
		m3Y = $("#Block03").offset().top - gap;
		m4Y = $("#Block04").offset().top - gap;

		$(".page.predictive .menuFrame").css({"top": menuY });

		if( $(this).scrollTop() >= (m4Y) )
		{
			$(".menuFrame ul li a").removeClass("on");
			$(".menuFrame ul li:nth-child(4) a").addClass("on");
		}
		else if( $(this).scrollTop() >= (m3Y) )
		{
			$(".menuFrame ul li a").removeClass("on");
			$(".menuFrame ul li:nth-child(3) a").addClass("on");
		}
		else if( $(this).scrollTop() >= m2Y )
		{
			$(".menuFrame").addClass("fixed");
			$(".menuFrame ul li a").removeClass("on");
			$(".menuFrame ul li:nth-child(2) a").addClass("on");
		}
		else if( $(this).scrollTop() >= m1Y )
		{
			$(".menuFrame").addClass("fixed");
			$(".menuFrame ul li a").removeClass("on");
			$(".menuFrame ul li:nth-child(1) a").addClass("on");
		}
		// else if( $(this).scrollTop() >= m1Y )
		// {
		// 	$(".menuFrame").addClass("fixed");
		// 	$(".menuFrame ul li a").removeClass("on");
		// 	$(".menuFrame ul li:nth-child(1) a").addClass("on");
		// }
		else
		{
			$(".menuFrame").removeClass("fixed");
			$(".menuFrame ul li a").removeClass("on");
			$(".menuFrame ul li:nth-child(1) a").addClass("on");
		}


	}

	checkScrollTop();

	$(window).scroll( function()
	{
		checkScrollTop();
	});

	var $menu = $(".menuFrame ul");
	$(".left.openMenu a").click(function()
	{
		if( $menu.css("display") == "none" )
		{
			$menu.show(200);
		}
		else
		{
			$menu.hide(200);
		}
	});

	$(".menuFrame .m1").click(function()
	{
		$('html,body').animate({scrollTop: 0}, 500);
		//
		if( $(window).width() < 768 )
		{
			$(".menuFrame ul").hide(200);
		}
	});

	$(".menuFrame .m2").click(function()
	{
		$('html,body').animate({scrollTop: m2Y+10  }, 500);
		//
		if( $(window).width() < 768 )
		{
			$(".menuFrame ul").hide(200);
		}
	});

	$(".menuFrame .m3").click(function()
	{
		$('html,body').animate({scrollTop: m3Y+10 }, 500);
		//
		if( $(window).width() < 768 )
		{
			$(".menuFrame ul").hide(200);
		}
	});

	$(".menuFrame .m4").click(function()
	{
		$('html,body').animate({scrollTop: m4Y+10 }, 500);
		//
		if( $(window).width() < 768 )
		{
			$(".menuFrame ul").hide(200);
		}
	});

	$(".menuFrame .m5").click(function()
	{
		$('html,body').animate({scrollTop: $("#advan-footer").offset().top }, 500);
		//
		if( $(window).width() < 768 )
		{
			$(".menuFrame ul").hide(200);
		}
	});



});














