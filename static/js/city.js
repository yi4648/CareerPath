$(function () {
    var ec_city = echarts.init(document.querySelector('.map'));

// 地图数据
    var geoCoordMap = {
        上海: [121.48, 31.22],
        安庆: [117.063604, 30.530957],
        蚌埠: [117.395513, 32.921524],
        亳州: [115.784463, 33.850643],
        池州: [117.498421, 30.670884],
        滁州: [118.339406, 32.261271],
        阜阳: [115.820436, 32.896061],
        合肥: [117.233443, 31.826578],
        淮北: [116.804537, 33.961656],
        淮南: [117.006389, 32.631847],
        黄山: [118.345437, 29.72189],
        六安: [116.52641, 31.741451],
        马鞍山: [118.51358, 31.676266],
        铜陵: [117.818477, 30.951233],
        芜湖: [118.439431, 31.358537],
        宿州: [116.970544, 33.652095],
        宣城: [118.765534, 30.946602],
        福州: [119.30347, 26.080429],
        龙岩: [117.023448, 25.08122],
        南平: [118.0595, 27.292158],
        宁德: [119.554511, 26.672242],
        莆田: [119.014521, 25.459865],
        泉州: [118.682446, 24.879952],
        三明: [117.645521, 26.269737],
        厦门: [118.096435, 24.485407],
        漳州: [117.653576, 24.51893],
        白银: [104.144451, 36.550825],
        定西: [104.63242, 35.586833],
        嘉峪关: [98.296204, 39.77796],
        金昌: [102.194606, 38.52582],
        酒泉: [98.500685, 39.738469],
        兰州: [103.840521, 36.067235],
        陇南: [104.928575, 33.40662],
        平凉: [106.671442, 35.549232],
        庆阳: [107.649386, 35.715216],
        天水: [105.731417, 34.587412],
        武威: [102.644554, 37.934378],
        张掖: [100.456411, 38.932066],
        潮州: [116.62947, 23.662623],
        东莞: [113.75842, 23.027308],
        佛山: [113.128512, 23.027759],
        广州: [113.271431, 23.135336],
        河源: [114.707446, 23.749684],
        惠州: [114.423558, 23.116359],
        江门: [113.088556, 22.584604],
        揭阳: [116.378512, 23.55574],
        茂名: [110.931543, 21.669064],
        梅州: [116.129537, 24.294178],
        清远: [113.062468, 23.68823],
        汕头: [116.688529, 23.359092],
        汕尾: [115.381553, 22.791263],
        韶关: [113.603527, 24.815881],
        深圳: [114.064552, 22.548457],
        阳江: [111.988489, 21.86434],
        云浮: [112.051513, 22.920912],
        湛江: [110.365554, 21.276723],
        肇庆: [112.471489, 23.052889],
        中山: [113.399422, 22.522315],
        珠海: [113.582555, 22.276565],
        安顺: [105.954417, 26.259252],
        毕节: [105.311581, 27.304095],
        贵阳: [106.714476, 26.60403],
        六盘水: [104.837555, 26.598833],
        铜仁: [109.187435, 27.696773],
        遵义: [106.933428, 27.731701],
        儋州: [109.587456, 19.527146],
        东方: [108.658567, 19.101105],
        海口: [110.325525, 20.044049],
        琼海: [110.480545, 19.264254],
        三沙: [111.673087, 16.497085],
        三亚: [109.518557, 18.258736],
        万宁: [110.399434, 18.800107],
        文昌: [110.804509, 19.549062],
        五指山: [109.52354, 18.780994],
        保定: [115.471464, 38.879988],
        沧州: [116.845581, 38.310215],
        承德: [117.969398, 40.957856],
        定州: [114.996496, 38.522199],
        邯郸: [114.545628, 36.631263],
        衡水: [115.675406, 37.745191],
        廊坊: [116.690582, 39.543367],
        秦皇岛: [119.608531, 39.941748],
        石家庄: [114.521532, 38.048312],
        唐山: [118.186459, 39.636584],
        辛集: [115.224451, 37.949309],
        邢台: [114.511462, 37.076686],
        张家口: [114.892572, 40.773237],
        安阳: [114.3995, 36.105941],
        鹤壁: [114.303594, 35.752357],
        济源: [112.608581, 35.072907],
        焦作: [113.248548, 35.220963],
        开封: [114.314593, 34.802886],
        洛阳: [112.459421, 34.624263],
        漯河: [114.023421, 33.587711],
        南阳: [112.534501, 32.996562],
        平顶山: [113.199529, 33.772051],
        濮阳: [115.035597, 35.767593],
        三门峡: [111.206533, 34.778327],
        商丘: [115.662449, 34.420202],
        新乡: [113.9336, 35.30964],
        信阳: [114.097483, 32.153015],
        许昌: [113.858476, 34.041432],
        郑州: [113.631419, 34.753439],
        周口: [114.703483, 33.631829],
        驻马店: [114.028471, 33.017842],
        大庆: [125.108658, 46.593633],
        哈尔滨: [126.541615, 45.808826],
        鹤岗: [130.304433, 47.356056],
        黑河: [127.53549, 50.251272],
        鸡西: [130.975619, 45.300872],
        佳木斯: [130.327359, 46.80569],
        牡丹江: [129.63954, 44.556246],
        七台河: [131.011545, 45.7763],
        齐齐哈尔: [123.924571, 47.359977],
        双鸭山: [131.165342, 46.653186],
        绥化: [126.975357, 46.660032],
        伊春: [128.847546, 47.733318],
        鄂州: [114.901607, 30.396572],
        黄冈: [114.87849, 30.459359],
        黄石: [115.045533, 30.205208],
        荆门: [112.206393, 31.041733],
        荆州: [112.245523, 30.340842],
        潜江: [112.905474, 30.408358],
        十堰: [110.80453, 32.635062],
        随州: [113.38945, 31.696517],
        天门: [113.172409, 30.669622],
        武汉: [114.311582, 30.598467],
        仙桃: [113.461591, 30.368272],
        咸宁: [114.328519, 29.847056],
        襄阳: [112.128537, 32.014797],
        孝感: [113.92251, 30.930689],
        宜昌: [111.292549, 30.697446],
        常德: [111.705452, 29.03775],
        郴州: [113.02146, 25.776683],
        衡阳: [112.578447, 26.899576],
        怀化: [110.008514, 27.575161],
        娄底: [112.001503, 27.703209],
        邵阳: [111.474433, 27.24527],
        湘潭: [112.950464, 27.835702],
        益阳: [112.361516, 28.559711],
        永州: [111.619455, 26.425864],
        岳阳: [113.135489, 29.363178],
        张家界: [110.485533, 29.122816],
        长沙: [112.945473, 28.234889],
        株洲: [113.140471, 27.833568],
        白城: [122.845591, 45.625504],
        白山: [126.42963, 41.939627],
        吉林: [126.555635, 43.843568],
        辽源: [125.150425, 42.894055],
        四平: [124.356482, 43.171994],
        松原: [124.831482, 45.147404],
        通化: [125.946606, 41.733816],
        长春: [125.330602, 43.821954],
        常州: [119.981485, 31.815796],
        淮安: [119.021484, 33.616295],
        连云港: [119.228621, 34.60225],
        南京: [118.802422, 32.064653],
        南通: [120.901592, 31.986549],
        苏州: [120.592412, 31.303564],
        泰州: [119.929566, 32.460675],
        无锡: [120.318583, 31.49881],
        宿迁: [118.281574, 33.96775],
        徐州: [117.290575, 34.212667],
        盐城: [120.167544, 33.355101],
        扬州: [119.419419, 32.400677],
        镇江: [119.430489, 32.194716],
        抚州: [116.364539, 27.954892],
        赣州: [114.940503, 25.835176],
        吉安: [115.000511, 27.119727],
        景德镇: [117.184576, 29.274248],
        九江: [116.007535, 29.711341],
        南昌: [115.864589, 28.689455],
        萍乡: [113.861496, 27.628393],
        上饶: [117.94946, 28.460626],
        新余: [114.923535, 27.823579],
        宜春: [114.423564, 27.820856],
        鹰潭: [117.075575, 28.265787],
        鞍山: [123.001373, 41.115054],
        本溪: [123.692507, 41.492916],
        朝阳: [120.457499, 41.579821],
        大连: [121.621631, 38.918954],
        丹东: [124.361547, 40.006409],
        抚顺: [123.964375, 41.88597],
        阜新: [121.676408, 42.028022],
        葫芦岛: [120.843398, 40.717364],
        锦州: [121.132596, 41.100931],
        辽阳: [123.243366, 41.274161],
        盘锦: [122.07749, 41.125875],
        沈阳: [123.466452, 41.68879],
        铁岭: [123.732365, 42.229948],
        营口: [122.241575, 40.673137],
        海东: [102.110444, 36.508511],
        西宁: [101.78445, 36.623385],
        滨州: [117.977404, 37.388196],
        德州: [116.365557, 37.441308],
        东营: [118.681385, 37.439642],
        菏泽: [115.487545, 35.239407],
        济南: [117.126399, 36.656554],
        济宁: [116.593612, 35.420177],
        莱芜: [117.68355, 36.219472],
        聊城: [115.991588, 36.462758],
        临沂: [118.363533, 35.110671],
        青岛: [120.389455, 36.072227],
        日照: [119.533415, 35.422839],
        泰安: [117.094495, 36.205858],
        威海: [122.127541, 37.516431],
        潍坊: [119.168378, 36.712652],
        烟台: [121.454415, 37.470038],
        枣庄: [117.330542, 34.815994],
        淄博: [118.061453, 36.819086],
        大同: [113.306436, 40.082469],
        晋城: [112.858578, 35.496285],
        晋中: [112.759595, 37.692839],
        临汾: [111.52553, 36.093742],
        吕梁: [111.15045, 37.524498],
        朔州: [112.439371, 39.337108],
        太原: [112.556391, 37.876989],
        忻州: [112.740624, 38.422383],
        阳泉: [113.587617, 37.862361],
        运城: [111.013389, 35.032707],
        长治: [113.122559, 36.201268],
        安康: [109.035601, 32.690513],
        宝鸡: [107.244575, 34.368916],
        汉中: [107.02943, 33.0738],
        商洛: [109.924418, 33.878634],
        铜川: [108.952404, 34.902637],
        渭南: [109.51659, 34.505716],
        西安: [108.946466, 34.347269],
        咸阳: [108.715422, 34.335476],
        延安: [109.496582, 36.591111],
        榆林: [109.741616, 38.290884],
        巴中: [106.751585, 31.872889],
        成都: [104.081534, 30.655822],
        达州: [107.474594, 31.214308],
        德阳: [104.404419, 31.133115],
        广安: [106.639553, 30.461746],
        广元: [105.850423, 32.441616],
        乐山: [103.772538, 29.557941],
        泸州: [105.448524, 28.877668],
        眉山: [103.856563, 30.082526],
        绵阳: [104.685562, 31.473663],
        南充: [106.117503, 30.843783],
        内江: [105.064588, 29.585887],
        攀枝花: [101.725541, 26.588033],
        遂宁: [105.599422, 30.539098],
        雅安: [103.049543, 30.016793],
        宜宾: [104.649404, 28.758007],
        资阳: [104.634435, 30.134957],
        自贡: [104.784449, 29.345585],
        高雄: [120.315994, 22.679904],
        台北: [121.539414, 25.073653],
        保山: [99.177273, 25.139039],
        昆明: [102.852448, 24.873998],
        丽江: [100.232465, 26.860657],
        临沧: [100.09544, 23.890469],
        普洱: [100.97257, 22.830979],
        曲靖: [103.802435, 25.496407],
        玉溪: [102.55356, 24.357711],
        昭通: [103.723512, 27.344084],
        杭州: [120.215512, 30.253083],
        湖州: [120.094517, 30.898964],
        嘉兴: [120.763552, 30.750975],
        金华: [119.653436, 29.084639],
        丽水: [119.929573, 28.473278],
        宁波: [121.628572, 29.866033],
        衢州: [118.866597, 28.975546],
        绍兴: [120.585478, 30.036369],
        台州: [121.427435, 28.662194],
        温州: [120.706477, 28.001085],
        舟山: [122.213556, 29.990912],


    };
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    var optioncity = {
        title: {
            text: '全国计算机招聘分布及TOP10',
            subtext: '数据来源："前程无忧"招聘网站',
            left: 'left',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name + ' : ' + params.value[2];
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['招聘信息总数'],
            textStyle: {
                color: '#fff',
            },

        },
        // /*工具按钮组*/
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //         dataView: {
        //             readOnly: false
        //         },
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        visualMap: {
            min: 0,
            max: 40000,
            textStyle: {
                color: '#fff'
            },
            pieces: [
                {
                    gt: 5000,
                    label: "> 5000 份",
                    color: "#7f1100"
                },

                {
                    gt: 1000,
                    lte: 5000,
                    label: "1000 -5000份",
                    color: "#d94e5d"
                }, {
                    gt: 100,
                    lte: 1000,
                    label: "100-1000份",
                    color: `#f8ba5d`
                }, {
                    gte: 50,
                    lte: 100,
                    label: " 50-100份",
                    color: "#ffd768"
                }, {
                    gte: 20,
                    lt: 50,
                    label: "20-50份",
                    color: "#31f388"
                }, {
                    gt: 0,
                    lt: 20,
                    label: "0-20份",
                    color: "#7cfddf"
                }],
        },
        geo: {
            map: 'china',
            roam: true,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(5,101,123)', //地图背景色
                    borderColor: "#5bc1c9" //省市边界线
                },
                emphasis: {
                    color: "rgba(37, 43, 61, .5)"
                }
            }
        },
        series: [{
            name: '招聘信息总数',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([]),
            symbolSize: 12,
            symbol: 'pin',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },
            {
            name: 'Top 10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData([]),
            showEffectOn: 'render',
            symbolSize: 3,
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                     textStyle: {
                         color: '#fff'
                     },
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
        },

        ],
    }
    ec_city.setOption(optioncity);


    function get_city_data() {
        $.ajax({
            url: "/city",
            success: function (data) {
                optioncity.series[0].data = convertData(data.data)
                optioncity.series[1].data = convertData(data.data.sort(function(a, b) {
                return b.value - a.value;}).slice(0, 11))
                ec_city.setOption(optioncity);
            },
            error: function (xhr, type, errorThrown) {

            }
        })
    }

    get_city_data()
})


