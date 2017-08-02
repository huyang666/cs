$('nav span').on('touchend',function(){
	$(this).addClass('on').siblings().removeClass('on')
})
$('footer li').on('touchend',function(){
	$(this).addClass('on').siblings().removeClass('on')
})