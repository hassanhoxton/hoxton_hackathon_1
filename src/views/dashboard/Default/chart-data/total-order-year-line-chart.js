// ===========================|| DASHBOARD - TOTAL ORDER YEAR CHART ||=========================== //

const chartData = {
    type: 'line',
    height: 90,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#fff'],
        fill: {
            type: 'solid',
            opacity: 1
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        yaxis: {
            min: 0,
            max: 10000000
        },
        xaxis: {
            categories: ['2018', '2019', '2020', '2021', '2022']
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: 'Commission'
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            name: 'Networth',
            data: [3500000, 4400000, 900000, 5400000, 7722210]
        }
    ]
};

export default chartData;
