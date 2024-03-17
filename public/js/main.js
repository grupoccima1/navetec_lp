
const calculateData = (investment) => {
  const dataB = Array.from({ length: 5 }, (_, i) => investment * (i + 1) * 0.1);
  const dataC = Array.from({ length: 5 }, (_, i) => investment * (i + 1) * 0.15);
  return {
      a: Array(5).fill(investment),
      b: dataB,
      c: dataC
  };
};

const getOptionChart = (data) => {
  return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
          type: 'category',
          data: ['2 años', '4 años', '6 años', '8 años', '10 años'],
      },
      yAxis: {
          type: 'value'
      },
      series: [
          {
              data: data.a,
              type: 'bar',
              stack: 'a',
              name: 'Inversion',
              color: ['#D9D9D9']
          },
          {
              data: data.b,
              type: 'bar',
              stack: 'a',
              name: 'Plusvalia',
              color: ['#568CCA']
          },
          {
              data: data.c,
              type: 'bar',
              stack: 'a',
              name: 'ROI',
              color: ['#021D49']
          },
      ]
  };
};

const initCharts = () => {
  const chart = echarts.init(document.getElementById('chart'));
  const initialInvestment = 1000000; // Valor inicial
  const data = calculateData(initialInvestment);
  chart.setOption(getOptionChart(data));

  document.getElementById('investment-select').addEventListener('change', function () {
      const selectedInvestment = parseInt(this.value);
      const newData = calculateData(selectedInvestment);
      chart.setOption(getOptionChart(newData));
  });
};

window.addEventListener("load", () => {
  initCharts();
});