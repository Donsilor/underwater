var temp=echarts.init(document.getElementById('temperature-chart'));
var tempoption={
	tooltip: {
		backgroundColor:'#eb6d6d',
        trigger: 'axis',
        position:'top',
        formatter:function(params){
        	return params[0].name + '<br>'+params[0].seriesName+':'+params[0].data+'℃';
        }
   },
	 xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55']
    },
    yAxis: {
        type: 'value',
        position:'top',
        axisLabel: {
       				 formatter:'{value}℃'
      				}
    },
    series: [{
    	name:'温度',
        data: [2, 0, 6, 4, 8, 10],
        type: 'line',
        areaStyle:{color:'rgba(235,109,109,0.5)'},
        itemStyle:{
        	normal:{
        		color:'#eb6d6d'},
        		lineStyle:{
        			color:'#eb6d6d'
        			}
        	}
        
    }]
};
var sal=echarts.init(document.getElementById('salinity-chart'));
var saloption={
	tooltip: {
		backgroundColor:'#66d3f9',
        trigger: 'axis',
        position:'top',
        formatter:function(params){
        	return params[0].name + '<br>'+params[0].seriesName+':'+params[0].data+'%';
        }
   },
	 xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55']
    },
    yAxis: {
        type: 'value',
        position:'top',
        axisLabel: {
       				 formatter:'{value}%'
      				}
    },
    series: [{
    	name:'温度',
        data: [2, 0, 6, 4, 8, 10],
        type: 'line',
        areaStyle:{color:'rgba(101,211,249,0.5)'},
        itemStyle:{
        	normal:{
        		color:'#66d3f9'},
        		lineStyle:{
        			color:'#66d3f9'
        			}
        	}
        
    }]
};
var dep=echarts.init(document.getElementById('depth-chart'));
var depoption={
	tooltip: {
		backgroundColor:'#8f65ae',
        trigger: 'axis',
        position:'top',
        formatter:function(params){
        	return params[0].name + '<br>'+params[0].seriesName+':'+params[0].data+'M';
        }
   },
	 xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55', '2018-09-30\n14:24:55']
    },
    yAxis: {
        type: 'value',
        position:'top',
        axisLabel: {
       				 formatter:'{value}M'
      				}
    },
    series: [{
    	name:'温度',
        data: [2, 0, 6, 4, 8, 10],
        type: 'line',
        areaStyle:{color:'rgba(143,101,174,0.5)'},
        itemStyle:{
        	normal:{
        		color:'#8f65ae'},
        		lineStyle:{
        			color:'#8f65ae'
        			}
        	}
        
    }]
};


temp.setOption(tempoption);
sal.setOption(saloption);
dep.setOption(depoption);
