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
            data: [25000, 15000, 25000, 25000, 15000, 40000, 25000, 10000, 25000, 25000, 8000, 35000]
        },
        {
            name: 'LOA(Received)',
            data: [25000, 9000, 7000, 25000, 35000, 20000, 40000, 15000, 8000, 45000, 15000, 35000]
        },
        {
            name: 'Transfer Values Added',
            data: [15000, 45000, 15000, 25000, 10000, 85000, 90000, 9000, 35000, 25000, 20000, 7000]
        },
        {
            name: 'Proposal Stage',
            data: [3000, 5000, 45000, 38900, 37200, 85000, 14000, 23000, 35000, 12000, 9000, 13000]
        },
        {
            name: 'Deal Agreed',
            data: [13000, 20000, 1000, 1000, 13000, 1000, 22000, 24000, 1000, 7000, 22000, 12000]
        },
        {
            name: 'Dbar  PTSR 1st Call ',
            data: [2000, 10000, 8000, 9000, 1000, 9000, 14000, 23000, 22000, 13000, 9000, 8000]
        },
        {
            name: 'Dbar  PTSR 2nd Call ',
            data: [8000, 8000, 1000, 2000, 4000, 9000, 9000, 13000, 6000, 8000, 12000, 7000]
        },
        {
            name: 'Transfer in Process ',
            data: [13000, 10000, 22000, 13000, 18000, 12000, 24000, 13000, 12000, 13000, 12000, 19000]
        },
        {
            name: 'Client',
            data: [12000, 12000, 12000, 13000, 28000, 12000, 8000, 1000, 6000, 7000, 12000, 22000]
        }
    ]
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export default chartData;
