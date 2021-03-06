// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

const chartData = {
    height: 480,
    type: 'bar',
    options: {
        chart: {
            id: 'bar-chart',
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            }
        },
        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return numberWithCommas(value);
                }
            }
        },
        legend: {
            show: true,
            fontSize: '14px',
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        fill: {
            type: 'solid'
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true
        }
    },
    series: [
        {
            name: 'LOA(Sent)',
            data: [35000, 125000, 35000, 35000, 35000, 80000, 35000, 20000, 35000, 45000, 15000, 75000]
        },
        {
            name: 'LOA(Received)',
            data: [35000, 15000, 15000, 35000, 65000, 40000, 80000, 25000, 15000, 85000, 25000, 75000]
        },
        {
            name: 'Transfer Values Added',
            data: [35000, 145000, 35000, 35000, 20000, 105000, 100000, 10000, 65000, 45000, 30000, 10000]
        },
        {
            name: 'Proposal Stage',
            data: [6000, 9000, 75000, 78900, 67200, 115000, 24000, 43000, 55000, 22000, 15000, 23000]
        },
        {
            name: 'Deal Agreed',
            data: [23000, 40000, 2000, 3000, 23000, 2000, 44000, 34000, 2000, 13000, 32000, 22000]
        },
        {
            name: 'Dbar  PTSR 1st Call ',
            data: [3000, 20000, 12000, 13000, 3000, 12000, 24000, 43000, 32000, 23000, 12000, 12000]
        },
        {
            name: 'Dbar  PTSR 2nd Call ',
            data: [13000, 10000, 2000, 3000, 8000, 12000, 14000, 23000, 12000, 13000, 22000, 9000]
        },
        {
            name: 'Transfer in Process ',
            data: [23000, 20000, 32000, 23000, 28000, 32000, 44000, 33000, 32000, 33000, 22000, 29000]
        },
        {
            name: 'Client',
            data: [24000, 30000, 22000, 33000, 48000, 22000, 14000, 23000, 12000, 13000, 22000, 39000]
        }
    ]
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export default chartData;
