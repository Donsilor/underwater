$(function(){
	var li=$('.footer ul li');
	li.click(function(){
		$('.footer_text').addClass('white');
		$(this).siblings('li').find('span').removeClass('white');
	li.mouseout(function(){
		$(this).find('span').removeClass('white');
	});	
	});

	var lia=$('.top-nav ul li');
	lia.click(function(){
		$(this).find('a').addClass('nav-active');
		$(this).siblings('li').find('a').removeClass('nav-active');
	});
	var navli=$('.nav ul li');
	navli.click(function(){
		$(this).find('ul').removeClass('hideul');
		$(this).siblings('li').find('ul').addClass('hideul');
	});
	var nav_li=$('.nav ul li ul li');
	nav_li.click(function(){
		$(this).find('a').addClass('active');
		$(this).siblings('li').find('a').removeClass('active');
	});	
})
