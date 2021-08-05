$(document).ready(function() {
    $(".header_burger").click(function(event){
        $(".header_burger, .header_menu").toggleClass("active");  
        // $(".header").toggleClass("header_fixed");
        $("body").toggleClass("lock");
    });
    $(".block_spoiler_title").click(function(event){
        if($(".block_spoiler").hasClass("one")){
            $(".block_spoiler_title").not($(this)).removeClass("active");
            $(".block_spoiler_text").not($(this).next()).slideUp(300);
        }
        $(this).toggleClass("active").next().slideToggle(300);
    });
     

	$("#header_menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

});
