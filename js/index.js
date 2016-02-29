$(function(){
	$(".navi_title").mouseover(function(){
		$(".navi_list").hide();
		$(".navi_list_all").hide();
		$(this).next().show();
	})
	$(".navi_list").mouseleave(function(){
		$(this).hide();
	})
	$(".navi_list_all").mouseleave(function(){
		$(this).hide();
	})
	$("#pic > img").css("width",$(window).width());
	$("#pic > img").css("height",$(window).height());
	// 设置图片的 src
	var pic_num = 1;
	$(".pic_left").click(function(){
		pic_num = (pic_num<2)?3:(pic_num-1);
		$("#pic > img").attr("src","images/"+pic_num+".jpg");
	})	
	$(".pic_right").click(function(){
		pic_num = (pic_num>2)?1:(pic_num+1);
		$("#pic > img").attr("src","images/"+pic_num+".jpg");
	})
})