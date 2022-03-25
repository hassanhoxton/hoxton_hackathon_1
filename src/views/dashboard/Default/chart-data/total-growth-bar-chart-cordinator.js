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
            data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
        },
        {
            name: 'LOA(Received)',
            data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75]
        },
        {
            name: 'Transfer Values Added',
            data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10]
        },
        {
            name: 'Proposal Stage',
            data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0]
        },
        {
            name: 'Deal Agreed',
            data: [0, 40, 2, 3, 23, 2, 44, 34, 2, 13, 32, 22]
        },
        {
            name: 'Dbar  PTSR 1st Call ',
            data: [3, 20, 12, 13, 3, 12, 24, 43, 32, 23, 12, 12]
        },
        {
            name: 'Dbar  PTSR 2nd Call ',
            data: [13, 10, 2, 3, 8, 12, 14, 23, 12, 13, 22, 9]
        },
        {
            name: 'Transfer in Process ',
            data: [23, 20, 32, 23, 28, 32, 44, 33, 32, 33, 22, 29]
        },
        {
            name: 'Client',
            data: [24, 30, 22, 33, 48, 22, 14, 23, 12, 13, 22, 39]
        }
    ]
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export default chartData;
