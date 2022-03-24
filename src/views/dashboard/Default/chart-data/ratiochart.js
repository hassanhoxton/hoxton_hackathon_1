// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

const chartData = {
    height: 250,
    type: 'bar',
    options: {
        colors: ['#2EB086', '#B33030', '#FFAD60'],
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
            categories: [
                'First Meetings(Scheduled)',
                'First Meeting(Completed) ',
                'LOA (Sent)',
                'LOA(Received) ',
                'Swerves',
                'Worth Chasing',
                'Not Worth Chasing',
                'Dead'
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
            data: [35, 125, 35, 35, 35, 80, 35, 20]
        },
        {
            name: 'Loss',
            data: [35, 15, 15, 35, 65, 40, 80, 25]
        },
        {
            name: 'Pending',
            data: [35, 15, 15, 35, 65, 40, 80, 25]
        }
    ]
};
export default chartData;
