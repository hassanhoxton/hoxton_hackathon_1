// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

const chartData = {
    height: 350,
    type: 'bar',
    options: {
        colors: ['#2EB086', '#B33030', '#FFAD60'],
        chart: {
            id: 'ratio-chart-cordinator',
            stacked: false,
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
            categories: [
                'LOA(Sent)',
                'LOA (Received)',
                'Transfer Values Added',
                'Proposal Stage',
                'Deal Agreed',
                'Dbar  PTSR 1st Call ',
                'Dbar PTSR 2nd Call',
                'Transfer in Process',
                'Client'
            ]
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
            type: 'solid',
            opacity: 1
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
            name: 'Success',
            data: [35, 125, 35, 35, 35, 80, 35, 20, 47]
        },
        {
            name: 'Loss',
            data: [35, 15, 15, 35, 65, 40, 80, 25, 37]
        },
        {
            name: 'Pending',
            data: [35, 15, 15, 35, 65, 40, 80, 25, 50]
        }
    ]
};
export default chartData;
