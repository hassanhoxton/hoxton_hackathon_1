// ===========================|| DASHBOARD - TOTAL ORDER MONTH CHART ||=========================== //
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
            max: 1000000
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: true
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
            data: [450000, 660000, 410000, 890000, 250000, 440000, 90000, 540000]
        }
    ]
};

export default chartData;
