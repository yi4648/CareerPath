$(function () {
    //1.tab栏切换
    //页签设置点击事件
    $('.moniter .tabs a').on('click',function () {
        //当前点击的页签添加active类，其他兄弟页签移出这个类
        $(this).addClass('active').siblings().removeClass('active')
        //获取当前点击的页面的索引
        var idx = $(this).index();
        //索引一致的页面显示
        $('.moniter .content').eq(idx).show().siblings('.content').hide();
    })
    //2.轮播图效果
    function lunbo(){
        $('.moniter .content .carousel>ul').animate({
            top: -200
        }, 5000, 'linear', function () {
            $('.moniter .content .carousel>ul').css('top', 0)
        });
    }
    lunbo();
    setInterval(lunbo,5000)
    //3.鼠标移入停止，移出动画继续
    $('.moniter .content .carousel>ul').on('mouseenter',function () {
        $(this).stop(true,false);
        clearInterval(timerId);
    }).on('mouseleave',function () {
        lunbo()
        timerId = setInterval(lunbo,5000)
    })

	// function biaoqian(){
    // 	$('.column:nth-child(2) > .map>').chart.on("mouseover",function(){
    //
	// 	})
	// }
	
	
	function get_item_data() {
		$.ajax({
			url: "/item",
			success: function(data) {
				$(".count1 .item p").eq(0).html(data.total[0])
				$(".count1 .item span").eq(0).html(data.job[0])
				$(".count1 .item p").eq(1).html(data.total[1])
				$(".count1 .item span").eq(1).html(data.job[1])
				$(".count1 .item p").eq(2).html(data.total[2])
				$(".count1 .item span").eq(2).html(data.job[2])
				$(".count1 .item p").eq(3).html(data.total[3])
				$(".count1 .item span").eq(3).html(data.job[3])
				$(".count2 .item p").eq(0).html(data.total[4])
				$(".count2 .item span").eq(0).html(data.job[4])
				$(".count2 .item p").eq(1).html(data.total[5])
				$(".count2 .item span").eq(1).html(data.job[5])
				$(".count2 .item p").eq(2).html(data.total[6])
				$(".count2 .item span").eq(2).html(data.job[6])
				$(".count2 .item p").eq(3).html(data.total[7])
				$(".count2 .item span").eq(3).html(data.job[7])
			},
			error: function(xhr, type, errorThrown) {
	
			}
		})
	}
	get_item_data()
	
	function get_span_data() {
		$.ajax({
			url: "/zhaopin",
			success: function(data) {
				for (var i = 0; i < 15; i++) {
					$(".moniter .content .carousel span").eq(i*3).html(data.job[i])
					$(".moniter .content .carousel span").eq(i*3+1).html(data.company[i])
					$(".moniter .content .carousel span").eq(i*3+2).html(data.salary[i])
				}		
			},
			error: function(xhr, type, errorThrown) {
	
			}
		})
	}
	get_span_data()
})
