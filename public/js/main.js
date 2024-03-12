var series = [
    {
        data: [100000, 100000, 100000, 100000, 100000],
        type: 'bar',
        stack: 'a',
        name: 'a',
        color: ['#D9D9D9']
      },
      {
        data: [10000, 20000, 30000, 40000, 50000],
        type: 'bar',
        stack: 'a',
        name: 'b',
        color: ['#002856']
      },
      {
        data: [20000, 30000, 40000, 50000, 60000],
        type: 'bar',
        stack: 'a',
        name: 'c',
        color: ['#3D7CC9']
      },
  ];
  const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: []
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    // const isStart = info.stackStart[j] === i;
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
      }
    };
  }
}

const getOptionChart=()=>{
    return {
        xAxis: {
          type: 'category',
          data: ['2 años', '4 años', '6 años', '8 años', '10 años'],
        },
        yAxis: {
          type: 'value'
        },
        series: series
      };
};
const initCharts=()=>{
    const chart=echarts.init(document.getElementById('chart'));


    chart.setOption(getOptionChart());
};

window.addEventListener("load", () =>{
    initCharts();
});