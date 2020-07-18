var ec_echarts3 = echarts.init(document.querySelector('.echarts3'));


var optionecharts3 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        top: '20%',
        left:'15%',
        right: '15%',
        bottom: '5%'
    },
    toolbox: {
        feature: {
            dataView: {show: false, readOnly: false},
            restore: {show: false},
            saveAsImage: {show: false}
        }
    },

    legend: {
        data: ['item1', 'item2'],
        bottom: 0
    },

    xAxis: [
        {
            type: 'category',
            show: false,
            data:[]
        }
    ],

    yAxis: [
        {
            type: 'value',
            max:30000,
            name: '招聘总数(条)',
            splitLine: {
                show: false,
            },
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: "#6c50f3"
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            min:5000,
            max:20000,
            name: '平均工资(元)',
            splitLine: {
                show: false,
            },
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: "#00ca95"
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },

    ],
    series: [
        {
            name: '招聘总数',
            type: 'line',
            symbol: 'circle',
            symbolSize: 15,
            itemStyle: {
                color: "#6c50f3",
                borderColor: "#fff",
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
            },
            tooltip: {
                show: true
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(108,80,243,0.3)'
                    },
                        {
                            offset: 1,
                            color: 'rgba(108,80,243,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 20
                }
            },
            smooth: true,
            data: [124, 165, 61, 126, 142, 122, 132]
        },
        {
            name: '平均工资',
            type: 'line',
            symbol: 'circle',
            symbolSize: 15,
            lineStyle: {
                normal: {
                    color: "#00ca95",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            itemStyle: {
                color: "#00ca95",
                borderColor: "#fff",
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: true
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,202,149,0.3)'
                    },
                        {
                            offset: 1,
                            color: 'rgba(0,202,149,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,202,149, 0.9)',
                    shadowBlur: 20
                }
            },
            smooth: true,
            yAxisIndex: 1,
            data: [132, 115, 148, 108, 126, 125, 149]
        },

    ]
};
ec_echarts3.setOption(optionecharts3);

function get_echarts3_data() {
    $.ajax({
        url: "/echarts3",
        success: function (data) {
            optionecharts3.xAxis[0].data = data.company
            optionecharts3.series[0].data = data.total
            optionecharts3.series[1].data = data.avgpay
            ec_echarts3.setOption(optionecharts3)
        },
        error: function (xhr, type, errorThrown) {

        }
    })
}

get_echarts3_data()