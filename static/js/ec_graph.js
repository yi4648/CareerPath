var ec_graph= echarts.init(document.querySelector(".graph"));

var source = [
    '计算机',
    '办公\n协作',
    '数据库',
    '软件\n开发',
    'ERP\n工程师',
    '运维',
    '云大\n物智',
    'IT\n管理',
    '知识\n工作者',
    '办公\n职员',
    '政府工\n作人员',
    '数据库\n开发工程师',
    '数据库\n管理员',
    '数据库\n架构师',
    '软件\n开发者',
    '软件\n工程师',
    '软件\n架构师',
    '系统\n工程师',
    '网络\n工程师',
    '信息\n安全专家',
    '云计算',
    '大数据',
    '物联网',
    '人工智能',
    '项目经理',
    'IT运维',
    '流程\n标准',
]

let listdata = [];

source.map((v, k) => {
    if (k > 0 && k <= 7) {
        listdata.push({
            name: v,
            category: 1,
            symbolSize: 43
        });
    } else if (k > 7) {
        listdata.push({
            value: v,
            category: 2,
            symbolSize: 32
        });
    } else {
        listdata.push({
            name: v,
            category: 0,
            symbolSize: 38,
            draggable: true
        })
    }
});
var optiongraph = {
    tooltip: {
        show: false
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'force', // circular | force | none
        circular: {
            rotateLabel: true
        },
        force: { //力引导图基本配置
            //initLayout: ,//力引导的初始化布局，默认使用xy轴的标点
            repulsion: 30,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
            gravity: 0,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
            edgeLength: [0,0],//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
            layoutAnimation: true
            //因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
        },
        symbol: 'circle', // 节点标记类型
        symbolSize: 35,
        focusNodeAdjacency: true, // 鼠标经过节点是否突出显示
        edgeSymbol: ['circle', 'none'],
        edgeSymbolSize: [0, 20],
        edgeLabel: {
            show: false
        },
        roam: true, // 是否开启鼠标平移
        draggable: true, // 节点是否可拖拽
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    fontSize: 7,
                    color: '#54f7ff'
                },
            }
        },
        lineStyle: {
            normal: {
                opacity: .7,
                color: '#54f7ff',
                width: 2,
                curveness: 0
            }
        },
        itemStyle: {
            opacity: .7,
            normal: {
                color: {
                    type: 'radial',
                    r: 0.9,
                    colorStops: [{
                        offset: 0,
                        color: '#0c1746'
                    }, {
                        offset: 1,
                        color: '#54f7ff'
                    }]
                },
                borderColor: '#54f7ff',
                borderWidth: 1
            }
        },
        categories: [{ // 节点分类
            name: 'root',
            label: {
                formatter: '{b}',
                fontSize: 14,
                color: '#ffec19'
            },
            itemStyle: {
                color: {
                    type: 'radial',
                    r: 0.9,
                    colorStops: [{
                        offset: 0,
                        color: '#0c1746'
                    }, {
                        offset: 1,
                        color: '#ffec19'
                    }]
                },
                borderColor: '#ffec19',
                borderWidth: 1
            }
        }, {
            name: 'child',
            label: {
                formatter: '{b}',
                fontSize: 12,
                color: '#54f7ff'
            },
            itemStyle: {
                color: {
                    type: 'radial',
                    r: 0.9,
                    colorStops: [{
                        offset: 0,
                        color: '#0c1746'
                    }, {
                        offset: 1,
                        color: '#54f7ff'
                    }]
                },
                borderColor: '#54f7ff',
                borderWidth: 1
            }
        }, {
            name: 'grandson',
            label: {
                formatter: '{c}',
                fontSize: 10,
                color: '#69a1ff'
            },
            itemStyle: {
                color: {
                    type: 'radial',
                    r: 0.9,
                    colorStops: [{
                        offset: 0,
                        color: '#0c1746'
                    }, {
                        offset: 1,
                        color: '#69a1ff'
                    }]
                },
                borderColor: '#69a1ff',
                borderWidth: 1
            }
        }],
        data: listdata, // 数据
        links: [{ // 节点间关系数据 - 数字表示源节点的索引
            source: 0,
            target: 1
        }, {
            source: 0,
            target: 2
        }, {
            source: 0,
            target: 3
        }, {
            source: 0,
            target: 4
        }, {
            source: 0,
            target: 5
        }, {
            source: 0,
            target: 6

        }, {
            source: 0,
            target: 7
        }, {
            source: 1,
            target: 8

        }, {
            source: 1,
            target: 9
        }, {
            source: 1,
            target: 10
        }, {
            source: 2,
            target: 11
        }, {
            source: 2,
            target: 12
        }, {
            source: 2,
            target: 13
        }, {
            source: 3,
            target: 14
        }, {
            source: 3,
            target: 15
        }, {
            source: 3,
            target: 16
        }, {
            source: 5,
            target: 17
        }, {
            source: 5,
            target: 18
        }, {
            source: 5,
            target: 19
        }, {
            source: 6,
            target: 20
        }, {
            source: 6,
            target: 21
        }, {
            source: 6,
            target: 22
        }, {
            source: 6,
            target: 23
        }, {
            source: 7,
            target: 24
        }, {
            source: 7,
            target: 25
        }, {
            source: 7,
            target: 26
        }, {
            source: 1,
            lineStyle: {
                normal: {
                    color: '#69a1ff'
                }
            }
        }, {
            source: 2,
            lineStyle: {
                normal: {
                    color: '#69a1ff'
                }
            }
        }, {
            source: 3,
            lineStyle: {
                normal: {
                    color: '#69a1ff'
                }
            }
        }, {
            source: 4,
            lineStyle: {
                normal: {
                    color: '#69a1ff'
                }
            }
        }, {
            source: 5,
            lineStyle: {
                normal: {
                    color: '#69a1ff'
                }
            }
        }, {
            source: 6,
            lineStyle: {
                normal: {
                    color: '#69a1ff'
                }
            }
        }, {
            source: 7,
            lineStyle: {
                normal: {
                    color: '#69a1ff'
                }
            }
        }, {
            source: 8,
            lineStyle: {
                normal: {
                    color: '#69a1ff'
                }
            }

        }]
    }]
};
//使用制定的配置项和数据显示图表
ec_graph.setOption(optiongraph);
