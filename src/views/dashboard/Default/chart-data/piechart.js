const chartData = {
    series: [4400, 5500, 1900, 4300, 2900, 9000, 8000, 1000],
    options: {
        labels: [
            'First Meetings(Scheduled)',
            'First Meeting(Completed) ',
            'LOA (Sent)',
            'LOA(Received) ',
            'Swerves',
            'Worth Chasing',
            'Not Worth Chasing',
            'Dead'
        ],
        theme: {
            monochrome: {
                enabled: false
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%'
                    },
                    legend: {
                        show: false
                    }
                }
            }
        ],
        chart: {
            events: {
                dataPointSelection: (event, chartContext, config) => {
                    console.log(config.w.config.labels[config.dataPointIndex]);
                }
            }
        }
    },
    type: 'pie',
    height: '400'
};
export default chartData;
