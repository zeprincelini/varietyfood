$(document).ready(function(){
	//$('h1').css('background-color', 'red');
	//sticky navigation
	$('.slide-nav').waypoint(function(direction){
		if(direction == 'down'){
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky');
		}
});

	//jump on click animation
	$('.scroll-to-plan').click(function(){
		$('html,body').animate({scrollTop: $('.js-plan').offset().top}, 1000);
	});
	$('.scroll-to-feast').click(function(){
		$('html,body').animate({scrollTop: $('.js-feast').offset().top}, 1000);
	});
	
	$('.unique').slick;
	
	//scroll animation with animate.css
	$('.js-animate').waypoint(function(){
		$('.js-animate').addClass('animated fadeIn');
	},{
		offset: '50%'
	});
	
	$('.js-animate2').waypoint(function(){
		$('.js-animate2').addClass('animated pulse');
	},{
		offset: '30%'
	});
	
	//mobile nav
	$('.mobile-nav').click(function(){
		var icon = $('.mobile-nav i');
		var nav = $('.main-nav');
		/*if(nav.css('display', 'none')){
			nav.css('display', 'block');
		}else if(nav.css('display', 'block')){
			nav.css('display', 'none');
		}*/
		nav.slideToggle(200);
		
		$(window).resize(function(){
			if($(window).width()>768)
			  $('.main-nav').css('display','block');
			else
			  $('.main-nav').css('display','none');
	  });
		
		/*if(icon.hasClass('fa-bars')){
			icon.addClass('.mobile-nav fa-close')
			icon.removeClass('fa-bars');
		}else{
			icon.removeClass('.mobile-nav fa-close')
			icon.addClass('fa-bars');
		}*/
	});
});