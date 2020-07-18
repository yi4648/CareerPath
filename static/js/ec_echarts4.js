var ec_echarts4 = echarts.init(document.querySelector(".echarts4"));

var mydata = []

var optionecharts4 = {
	//'#006cff','#60cda0','#ed8884','#ff9f7f','#0096ff','#9fe6b8','#32c5e9','#1d9dff'
    color: ["#EAEA26", "#906BF9",  "#01E17E", "#3DD1F9", "#FFAD05", '#00FFFF', '#FF0000','#006cff'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    visualMap: {
        show: false,
        min: 0,
        max: 60000,
        inRange: {
            colorLightness: [0.5, 0.8]
        }
    },
    series : [
        {
            name:'经验要求',
            type:'pie',
            radius : '68%',
            center: ['50%', '50%'],
            // data:mydata,
            data:mydata.sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
        }
    ]
};
ec_echarts4.setOption(optionecharts4)
function get_echarts4_data() {
        $.ajax({
            url: "/echarts4",
            success: function (data) {
                optionecharts4.series[0].data = data.data
                ec_echarts4.setOption(optionecharts4);
            },
            error: function (xhr, type, errorThrown) {

            }
        })
    }

    get_echarts4_data()