var ec_echarts31 = echarts.init(document.querySelector('echarts3'));

var optionecharts3 = {
        legend: {
            color: ["#17B4FA", "#47D8BE", "#F9A589"],
            data: ['招聘数量','平均工资'],
            left: 'center',
             top: "2%",
             textStyle: {
                color: "#ffffff"
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        }, {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)'
                        }],
                        global: false
                    }
                },
            },
        },
        xAxis: [{
            type: 'category',
			show:false,
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#9581F5'
                },
            },
            splitArea: {
                //show: true,
                color: '#f00',
                lineStyle: {
                    color: '#f00'
                },
            },
            axisLabel: {
				show:false,
                color: '#fff'
            },
            splitLine: {
                show: false
            },
            boundaryGap: false,
            data: ['民营公司','国企','上市公司','合资','外资（非欧美）','外资（欧美）','创业公司','事业单位','政府机关','非营利组织','外企代表处'],
        }],
    
        yAxis: [{
            type: 'value',
			show:false,
            min: 0,
            max: 10000,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9581F5'
                },
            },
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
    
                },
            },
            axisTick: {
                show: true,
            },
        },
		
		],
        series: [{
                name: '招聘数量',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 25,
                lineStyle: {
                    normal: {
                        color: "#6c50f3",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#6c50f3',
                    }
                },
                itemStyle: {
                    color: "#6c50f3",
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
                data: []
            },
            {
                    name: '平均工资',
                    type: 'line',
                    // smooth: true, //是否平滑
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbol: 'circle',
                    symbolSize: 25,
                    lineStyle: {
                        normal: {
                            color: "#00ca95",
                            shadowColor: 'rgba(0, 0, 0, .3)',
                            shadowBlur: 0,
                            shadowOffsetY: 5,
                            shadowOffsetX: 5,
                        },
                    },
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: "#00ca95",
                        }
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
                                    color: 'rgba(108,80,243,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(0,202,149, 0.9)',
                            shadowBlur: 20
                        }
                    },
                    data: []
                }
        ]
    };
ec_echarts31.setOption(optionecharts3);
function get_echarts3_data() {
	$.ajax({
		url:"/echarts3",
		success: function(data) {
		    optionecharts3.xAxis.data = data.company
			optionecharts3.series[0].data = data.total
            optionecharts3.series[1].data = data.avgpay
            ec_echarts31.setOption(optionecharts3)
		},
		error: function(xhr, type, errorThrown) {

		}
	})
}

get_echarts3_data()