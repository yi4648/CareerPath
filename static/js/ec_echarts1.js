$(function () {
    var ec_echarts1 = echarts.init(document.querySelector('.echarts1'));

    var mydata = []

    var optionecharts1 = {
        // color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05", '#00FFFF', '#FF0000', '#FE8463'],
        color: ["#a7c8ff", "#60cda0", "#ed8884", "#ff9f7f","#9fe6b8", "#32c5e9", '#00ffff', '#59ff00',"#ffad05"],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            textStyle: {
                color: "white",
                fontSize: 10
            },
            orient: 'vertical',
            left: 'right',
            data:mydata
            // data: ['不限', '中专/中技', '高中', '大专', '本科', '硕士', '博士', 'MBA/EMBA']
        },
        series: [
            {
                name: '学历要求',
                type: 'pie',
                radius: '60%',
                center: ['40%', '60%'],
                data: mydata,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 30,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    // ec_echarts1.setOption(optionecharts1);

    function get_echarts1_data() {
        $.ajax({
            url: "/echarts1",
            success: function (data) {
                optionecharts1.legend.data = data.name
                optionecharts1.series[0].data = data.data
                ec_echarts1.setOption(optionecharts1);
            },
            error: function (xhr, type, errorThrown) {

            }
        })
    }
    get_echarts1_data()
})

